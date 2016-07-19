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
define([
    'lib/FeatureBase',
    './Routes',
    './controller/AboutController'
], function(FeatureBase,
    Routes,
    AboutController) {

    class Feature extends FeatureBase {

        constructor() {
            super('about');
            this.routes = Routes;
        }

        execute() {
            this.controller('AboutController', AboutController);
        }
    }

    return Feature;
});
