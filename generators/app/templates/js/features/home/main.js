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
        'lib/FeatureBase',
        './Routes',
        './controller/HomeController',
        './service/HomeService',
        './partials/custom.html'
    ], function(Base,
        Routes,
        HomeController,
        HomeService,
        customTpl) {

        var Feature = function() {
            Base.call(this, 'home');
            this.routes = Routes;
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.run = function() {
            this.mod.controller('HomeController', HomeController);
            this.mod.service('HomeService', HomeService);
            this.mod.run([
                '$templateCache',
                function($templateCache) {
                    $templateCache.put('customTpl', customTpl);
                }
            ]);
        };

        return Feature;

    });

}(define));
