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
    './service/HomeService'
], function(FeatureBase,
    Routes,
    HomeController,
    HomeService) {

    class Feature extends FeatureBase {

        constructor() {
            super('home');
            this.routes = Routes;
        }

        execute() {
            this.controller('HomeController', HomeController);
            this.service('HomeService', HomeService);
        }
    }

    return Feature;

});
