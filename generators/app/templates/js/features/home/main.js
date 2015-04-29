/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
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
        './controller/HomeController',
        './service/HomeService'
    ], function(angular,
        Routes,
        HomeController,
        HomeService) {

        var Feature = function() {
            this.export = 'home';
            this.routes = Routes;
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {
            this.mod.controller('HomeController', HomeController);
            this.mod.service('HomeService', HomeService);
        };

        return Feature;

    });

}(define));
