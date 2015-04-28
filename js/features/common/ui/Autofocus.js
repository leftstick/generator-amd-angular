/**
 *  Defines the Autofocus Module.
 *  This module used to override the original `autofocus` attribute since it doesn't work properly with ngRoute
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
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
