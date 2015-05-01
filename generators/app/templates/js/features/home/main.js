/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 * ******************************************************************************************************
 */
(function(define) {
    'use strict';

    define([
        'fw/lib/FeatureBase',
        './Routes',
        './controller/HomeController',
        './service/HomeService'
    ], function(Base,
        Routes,
        HomeController,
        HomeService) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('home');
            };

            this.constructor = function() {
                this.routes = Routes;
            };

            this.run = function() {
                this.mod.controller('HomeController', HomeController);
                this.mod.service('HomeService', HomeService);
            };

        });

        return Feature;

    });

}(define));
