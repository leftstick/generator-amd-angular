/**
 *  Defines the Autofocus Module.
 *  This module used to override the original `autofocus` attribute since it doesn't work properly with ngRoute
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var Feature = function() {
            this.export = 'AutofocusModule';
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {
            this.mod.directive('autofocus', function() {
                return {
                    restrict: 'A',
                    link: function($scope, element) {
                        element[0].focus();
                    }
                };
            });
        };

        return Feature;

    });

})(define);
