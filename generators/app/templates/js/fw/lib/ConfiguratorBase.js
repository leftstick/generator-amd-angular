/**
 *  ConfiguratorBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define([], function() {

        var ConfiguratorBase = function(features, app) {
            this.features = features;
            this.app = app;
        };

        ConfiguratorBase.prototype.run = function() {};

        return ConfiguratorBase;
    });

}(define));
