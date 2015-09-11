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

    define(['lib/ConfiguratorBase'], function(Base) {

        var Configurator = function(features, app) {
            Base.call(this, features, app);
        };

        Configurator.prototype = new Base();

        Configurator.prototype.constructor = Configurator;

        Configurator.prototype.run = function() {
            this.app.config([
                'cfpLoadingBarProvider',
                function(cfpLoadingBarProvider) {
                    cfpLoadingBarProvider.includeSpinner = true;
                    cfpLoadingBarProvider.includeBar = true;
                    cfpLoadingBarProvider.latencyThreshold = 100;
                }
            ]);
        };

        return Configurator;

    });

}(define));
