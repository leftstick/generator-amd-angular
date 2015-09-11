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

    define(['lib/FeatureBase', 'lodash', 'jquery'], function(Base, _, $) {

        var Feature = function() {
            Base.call(this, 'RouteIndicator');
            this.$body = $('body');
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.run = function() {
            var self = this;
            this.mod.run([
                '$rootScope',
                'Routes',
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
