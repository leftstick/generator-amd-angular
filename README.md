generator-require-angular
==================

[![NPM version][npm-image]][npm-url]
![][david-url]

Yeoman generator for requirejs + angularjs

> You can view the online demo at: [http://leftstick.github.io/generator-require-angular](http://leftstick.github.io/generator-require-angular)

## Prerequisites ##

1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install [bower](http://bower.io/): `npm install -g bower`
3. Install [sero-cli](https://www.npmjs.com/package/sero-cli): `npm install -g sero-cli`
4. Install __this__: `npm install -g generator-require-angular`

## Use `generator-require-angular` ##

`yo require-angular`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/generator-require-angular/master/docs/img/questions.png)

And then, the project generated.

## Debug your app ##

By using [sero-cli](https://www.npmjs.com/package/sero-cli), it's easy to start debugging your app.

Just move into the created directory with the given `project name`.

Run `sero`, and choose `Start a static web server for current working directory` to start a debug web server(all options can be left with default value).

Open [http://localhost:8080](http://localhost:8080), and have fun.

## Release your app ##

Move the root of the created project.

Run `sero`, and choose `Build Javascripts into one 'main.js'` to compile all the JavaScript codes into one file. The release folder is `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

### Like have a try with the released app? ###

Move into `{root}/build/`

Run `sero` and choose `Start a static web server for current working directory`(all options can be left with default value). 

Open [http://localhost:8080](http://localhost:8080) to watch the released version. See `Network` in browser's debug tool, all javascript content compiled into the `main.js`.

[npm-url]: https://npmjs.org/package/generator-require-angular
[npm-image]: https://badge.fury.io/js/generator-require-angular.png
[david-url]: https://david-dm.org/leftstick/generator-require-angular.png