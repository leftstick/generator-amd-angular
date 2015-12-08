/**
 *  ServiceBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([], function() {

    class ServiceBase {

        constructor(features, app) {
            this.features = features;
            this.app = app;

            this.factory = app.factory;
            this.service = app.service;
        }

        execute() {}
    }

    return ServiceBase;
});
