/**
 *  InitBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['extend'], function() {

        var InitBase = Class.extend(function() {

            this.constructor = function(features, app) {
                this.features = features;
                this.app = app;
            };

            this.run = function() {};
        });

        return InitBase;

    });

}(define));
