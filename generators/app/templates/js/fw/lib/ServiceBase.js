/**
 *  ServiceBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define([], function() {

        var ServiceBase = function(features, app) {
            this.features = features;
            this.app = app;
        };

        ServiceBase.prototype.run = function() {};

        return ServiceBase;

    });

}(define));
