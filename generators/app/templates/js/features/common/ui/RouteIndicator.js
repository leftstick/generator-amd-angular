/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['angular', 'lodash', 'jquery'], function(angular, _, $) {

        var Feature = function() {
            this.export = 'RouteIndicator';
            this.mod = angular.module(this.export, []);
            this.$body = $('body');
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {

            var self = this;
            this.mod.run(['$rootScope', 'Routes',
                function($rootScope, Routes) {
                    var classes = _.pluck(Routes, 'id').join(' ');
                    $rootScope.$on('$routeChangeSuccess', function(e, route) {
                        self.$body.removeClass(classes);
                        if (route && route.$$route && route.$$route.id) {
                            self.$body.addClass(route.$$route.id);
                        }
                    });
                }
            ]);
        };

        return Feature;

    });

}(define));
