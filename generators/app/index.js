'use strict';

var generators = require('yeoman-generator');

var gen = generators.Base.extend({
    initializing: function() {

        try {
            this.username = process.env['USER'] || process.env['USERPROFILE'].split(require('path').sep)[2];
        } catch (e) {
            this.username = '';
        }
    },
    prompting: function() {
        var done = this.async();
        var self = this;

        this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            validate: function(name) {
                if (!name) {
                    return 'Project name cannot be empty';
                }
                if (!/\w+/.test(name)) {
                    return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
                }

                var fs = require('fs');
                if (!fs.existsSync(self.destinationPath(name))) {
                    return true;
                }
                if (require('fs').statSync(self.destinationPath(name)).isDirectory()) {
                    return 'Project already exist';
                }
                return true;
            }
        }, {
            type: 'input',
            name: 'description',
            message: 'Your project description',
            default: ''
        }, {
            type: 'input',
            name: 'username',
            message: 'Your name',
            default: this.username
        }, {
            type: 'input',
            name: 'email',
            message: 'Your email',
            default: ''
        }, {
            type: 'confirm',
            name: 'pushState',
            message: 'Use html5 mode?',
            default: true
        }], function(answers) {
            this.answers = answers;
            this.obj = {
                answers: this.answers
            };
            done();
        }.bind(this));
    },
    writing: function() {
        var done = this.async();
        var fs = require('fs');
        var self = this;
        var _ = require('lodash');
        fs.mkdir(this.destinationPath(this.answers.name), function(err) {
            if (err) {
                self.log.error(err.toString());
                process.exit(1);
            }
            self.fs.copyTpl(self.templatePath('etc/config.json'), self.destinationPath(self.answers.name + '/etc/config.json'), self.obj);
            self.copy(self.templatePath('img/logo.png'), self.destinationPath(self.answers.name + '/img/logo.png'));
            self.directory(self.templatePath('js'), self.destinationPath(self.answers.name + '/js'), function(body) {
                return _.template(body, {
                    interpolate: /<%=([\s\S]+?)%>/g
                })(self.obj);
            });
            self.directory(self.templatePath('less'), self.destinationPath(self.answers.name + '/less'));
            self.directory(self.templatePath('mock'), self.destinationPath(self.answers.name + '/mock'));
            self.copy(self.templatePath('.bowerrc'), self.destinationPath(self.answers.name + '/.bowerrc'));
            self.copy(self.templatePath('.gitignore'), self.destinationPath(self.answers.name + '/.gitignore'));
            self.copy(self.templatePath('.jshintrc'), self.destinationPath(self.answers.name + '/.jshintrc'));
            self.fs.copyTpl(self.templatePath('bower.json'), self.destinationPath(self.answers.name + '/bower.json'), self.obj);
            self.copy(self.templatePath('favicon.ico'), self.destinationPath(self.answers.name + '/favicon.ico'));
            self.copy(self.templatePath('index.html'), self.destinationPath(self.answers.name + '/index.html'));
            done();
        });
    },
    install: function() {
        var done = this.async();
        console.log(this.destinationRoot() + '/' + this.answers.name);
        this.destinationRoot(this.destinationRoot() + '/' + this.answers.name);
        this.bowerInstall('', done);
    },
    end: function() {
        this.log.ok('Project ' + this.answers.name + ' generated!!!');
    }
});

module.exports = gen;
