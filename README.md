generator-amd-angular
==================

[![NPM version][npm-image]][npm-url]
![][david-url]

Yeoman generator for angularjs based application with amd module

> You can view the online demo at: [http://leftstick.github.io/generator-amd-angular](http://leftstick.github.io/generator-amd-angular)

## Prerequisites ##

1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install [bower](http://bower.io/): `npm install -g bower`
3. Install __this__: `npm install -g generator-amd-angular`

## Use `generator-amd-angular` ##

`yo amd-angular`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/generator-amd-angular/master/docs/img/questions.png)

And then, the project generated.

## Debug your app ##

The full featured `gulp` and `webpack` are embedded, it's easy to start debugging your app.

Just move into the root folder of created directory.

Run `gulp dev` to start a debug web server for current working directory.

Open [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html), and have fun.


## Release your app ##

Move the root of the created project.

Run `gulp release` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

### Like have a try with the released app? ###

Install [sero-cli](https://github.com/leftstick/Sero-cli): `npm install -g sero-cli`

Move into `{root}/build/`

Run `sero server -r . -p 8080`, a static web server launched at port 8080.

Open [http://localhost:8080](http://localhost:8080) to watch the released version.

## References ##

1. [yeoman](http://yeoman.io/)
2. [gulp](http://gulpjs.com/)
3. [webpack](http://webpack.github.io/)
4. [angular](https://angularjs.org/)
5. [Bootstrap](http://getbootstrap.com/)
6. [angular-strap](http://mgcrea.github.io/angular-strap/)
7. [angular-smart-table](http://lorenzofox3.github.io/smart-table-website/)
8. [angular-sweetnotifier](https://github.com/leftstick/angular-sweetnotifier)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/generator-amd-angular/master/LICENSE)




[npm-url]: https://npmjs.org/package/generator-amd-angular
[npm-image]: https://badge.fury.io/js/generator-amd-angular.png
[david-url]: https://david-dm.org/leftstick/generator-amd-angular.png
