/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
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
    './controller/AboutController',
    './service/AboutService'
], function(FeatureBase,
    Routes,
    AboutController,
    AboutService) {

    class Feature extends FeatureBase {

        constructor() {
            super('about');
            this.routes = Routes;
        }

        execute() {
            this.controller('AboutController', AboutController);
            this.service('AboutService', AboutService);
        }
    }

    return Feature;
});
