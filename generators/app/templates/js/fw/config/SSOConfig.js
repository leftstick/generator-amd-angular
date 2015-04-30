/**
 *  SSOConfig set authorised configuration.
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
            this.app.config(['$httpProvider', function($httpProvider) {
                $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
                $httpProvider.defaults.withCredentials = true;
            }]);
        };

        return Configurator;

    });

}(define));
