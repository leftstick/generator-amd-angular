/**
 *
 *  Defines `events` service which helps developer
 *  control EVENT system
 *
 *
 *  @author  Hao.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define(['angular', 'lodash'], function(angular, _) {

        var Service = function(features, app) {
            this.features = features;
            this.app = app;
        };

        Service.prototype.run = function() {

            this.app.factory('events', ['$rootScope', function($rootScope) {
                var factory = {};

                var listeners = {};

                factory.emit = function(eventName, data) {
                    if (!eventName) {
                        return;
                    }
                    $rootScope.$broadcast(eventName, data);
                };

                factory.on = function(eventName, callback) {
                    if (!listeners[eventName]) {
                        listeners[eventName] = [];
                        $rootScope.$on(eventName, function(event, data) {
                            _.each(listeners[eventName], function(listener) {
                                listener(data);
                            });
                        });

                    }
                    if (angular.isFunction(callback)) {
                        listeners[eventName].push(callback);
                    }
                };

                return factory;
            }]);
        };

        return Service;

    });

}(define));
