/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 * ******************************************************************************************************
 */
(function(define) {
    'use strict';

    define([
        'angular',
        './Routes',
        './controller/AboutController',
        './service/AboutService'
    ], function(angular,
        Routes,
        AboutController,
        AboutService) {

        var Feature = function() {
            this.export = 'about';
            this.routes = Routes;
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {
            this.mod.controller('AboutController', AboutController);
            this.mod.service('AboutService', AboutService);
        };

        return Feature;

    });

}(define));
