/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['ConfiguratorBase', 'tpl!etc/config.json'], function(Base, tpl) {

        var Configurator = Base.extend(function() {
            this.constructor = function(features, app) {
                this.super(features, app);
                this.config = JSON.parse(tpl());
            };

            this.run = function() {
                this.super.run();
                this.app.constant('CONF', this.config);
            };
        });

        return Configurator;

    });

}(define));
