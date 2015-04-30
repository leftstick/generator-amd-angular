/**
 *  LoadingBarConfig turn on the loading indicator function.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define([], function() {

        var Configurator = function(features, app) {
            this.features = features;
            this.app = app;
        };

        Configurator.prototype.run = function() {
            this.app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
                cfpLoadingBarProvider.includeSpinner = true;
                cfpLoadingBarProvider.includeBar = true;
                cfpLoadingBarProvider.latencyThreshold = 100;
            }]);
        };

        return Configurator;

    });

}(define));
