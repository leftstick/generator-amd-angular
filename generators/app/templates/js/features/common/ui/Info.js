/**
 *  Defines the Info Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    var commonBase = requirejs.toUrl('common');

    define(['angular'], function(angular) {

        var Feature = function() {
            this.export = 'InfoModal';
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {

            this.mod.run(['events', '$timeout', '$rootScope', function(events, $timeout, $rootScope) {

                events.on('info', function(opts) {
                    if (!opts) {
                        return;
                    }

                    var scope = $rootScope.$new();

                    scope.close = function($hide) {
                        $hide();
                        if (angular.isFunction(opts.onClose)) {
                            opts.onClose();
                        }
                    };

                    $timeout(function() {
                        events.emit('modal', {
                            scope: scope,
                            title: 'Information',
                            backdrop: 'static',
                            content: opts.content,
                            animation: 'am-fade-and-slide-top',
                            template: commonBase + '/ui/Info.html'
                        });
                    }, 0);
                });

            }]);
        };

        return Feature;

    });

})(define);
