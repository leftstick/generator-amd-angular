/**
 *  main.js is responsible for the organization of features and cache control.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([
    'angular',
    'init/main',
    'ext/main',
    'config/main',
    'service/main',
    'features/main',
    'splash-screen'
], function(angular, Initializers, Extensions, Configurators, Services, Features, Splash) {

    var App = function() {
        this.appName = '<%= answers.name %>';
        Features.forEach(function(Feature) {
            this.push(new Feature());
        }, this.features = []);
    };

    App.prototype.findDependencies = function() {
        this.depends = Extensions.slice(0);

        var featureNames = this.features
            .filter(feature => feature.export)
            .map(feature => feature.export);

        this.depends.push(...featureNames);
    };

    App.prototype.beforeStart = function() {
        Initializers.forEach(function(Initializer) {
            (new Initializer(this.features)).execute();
        }, this);

        this.features.forEach(feature => feature.beforeStart());
    };

    App.prototype.createApp = function() {
        this.features.forEach(feature => feature.execute());

        this.app = angular.module(this.appName, this.depends);
    };

    App.prototype.configApp = function() {
        Configurators.forEach(function(Configurator) {
            (new Configurator(this.features, this.app)).execute();
        }, this);
    };

    App.prototype.registerService = function() {
        Services.forEach(function(Service) {
            (new Service(this.features, this.app)).execute();
        }, this);
    };

    App.prototype.destroySplash = function() {
        var _this = this;
        Splash.Splash.destroy();
        require('splash-screen/dist/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    };

    App.prototype.launch = function() {
        angular.bootstrap(document, [this.appName]);
    };

    App.prototype.run = function() {
        this.findDependencies();
        this.beforeStart();
        this.createApp();
        this.configApp();
        this.registerService();
        this.destroySplash();
        this.launch();
    };

    return App;
});
