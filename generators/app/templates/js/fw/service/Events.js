/**
 *
 *  Defines `events` service which helps developer
 *  control EVENT system
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['lib/ServiceBase', 'angular'], function(ServiceBase, angular) {

    var isFunction = angular.isFunction;

    class Service extends ServiceBase {
        constructor(features, app) {
            super(features, app);
        }

        events($rootScope) {
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
                        listeners[eventName].forEach(function(listener) {
                            listener(data);
                        });
                    });

                }
                if (isFunction(callback)) {
                    listeners[eventName].push(callback);
                }
            };

            factory.off = function(eventName, callback) {
                if (!listeners[eventName]) {
                    return;
                }
                var index = listeners[eventName].indexOf(callback);
                if (index > -1) {
                    listeners[eventName].splice(index, 1);
                }
            };

            return factory;
        }

        execute() {
            this.events.$inject = ['$rootScope'];
            this.factory('events', this.events);
        }
    }

    return Service;

});
