/**
 *  Defines the Footer Module.
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define(['angular', 'jquery', 'tpl!common/ui/Footer.html', 'tpl!etc/config.json'], function(angular, $, tpl, config) {

        var Feature = function() {
            this.config = JSON.parse(config());
            this.$body = $('body');
            this.mod = angular.module('FooterModule', []);
        };

        Feature.prototype.beforeStart = function() {
            this.$body.append(tpl());
        };

        Feature.prototype.run = function() {
            var self = this;
            this.mod.controller('FooterCtrl', ['$scope', function($scope) {
                $scope.config = self.config;
            }]);
        };

        return Feature;

    });

})(define);
