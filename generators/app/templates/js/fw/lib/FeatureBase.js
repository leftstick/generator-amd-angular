/**
 *  FeatureBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var FeatureBase = function(name) {
            this.export = name;
            this.mod = angular.module(this.export, []);
        };

        FeatureBase.prototype.beforeStart = function() {};

        FeatureBase.prototype.run = function() {};

        return FeatureBase;
    });

}(define));
