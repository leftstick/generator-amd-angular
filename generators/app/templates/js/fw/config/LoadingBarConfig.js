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

    define(['fw/lib/ConfiguratorBase'], function(Base) {

        var Configurator = Base.extend(function() {
            this.constructor = function(features, app) {
                this.super(features, app);
            };

            this.run = function() {
                this.super.run();
                this.app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
                    cfpLoadingBarProvider.includeSpinner = true;
                    cfpLoadingBarProvider.includeBar = true;
                    cfpLoadingBarProvider.latencyThreshold = 100;
                }]);
            };
        });

        return Configurator;

    });

}(define));
