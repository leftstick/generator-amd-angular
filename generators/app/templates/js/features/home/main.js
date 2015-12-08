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
'use strict';

define([
    'lib/FeatureBase',
    './Routes',
    './controller/HomeController',
    './service/HomeService',
    './partials/custom.html'
], function(FeatureBase,
    Routes,
    HomeController,
    HomeService,
    customTpl) {

    class Feature extends FeatureBase {

        constructor() {
            super('home');
            this.routes = Routes;
        }

        execute() {
            this.controller('HomeController', HomeController);
            this.service('HomeService', HomeService);
            this.run([
                '$templateCache',
                function($templateCache) {
                    $templateCache.put('customTpl', customTpl);
                }
            ]);
        }
    }

    return Feature;

});
