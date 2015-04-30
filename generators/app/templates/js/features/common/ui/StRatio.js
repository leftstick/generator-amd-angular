/**
 *
 *  The stRatio.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
(function(define) {
    'use strict';

    define([], function() {

        var Feature = function() {
            this.export = 'StRatioModule';
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {

            var dir = function() {
                return {
                    restrict: 'A',
                    scope: {},
                    link: function($scope, element, attr) {
                        var ratio = +(attr.stRatio);
                        element.css('width', ratio + '%');
                    }
                };
            };

            this.mod.directive('stRatio', [dir]);
        };

        return Feature;

    });


})(define);
