/**
 *  Defines the Error Modal
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    var commonBase = requirejs.toUrl('common');

    define(['angular'], function(angular) {

        var Feature = function() {
            this.export = 'ErrorModal';
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {

            this.mod.run(['events', '$timeout', '$rootScope', function(events, $timeout, $rootScope) {

                events.on('error', function(opts) {
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
                            title: 'Exception',
                            backdrop: 'static',
                            content: opts.content,
                            animation: 'am-fade-and-slide-top',
                            template: commonBase + '/ui/Error.html'
                        });
                    }, 0);
                });

            }]);
        };

        return Feature;

    });

})(define);
