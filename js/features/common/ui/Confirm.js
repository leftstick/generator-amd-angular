/**
 *  Defines the Confirm Modal
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
            this.export = 'ConfirmModal';
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {
            this.mod.run(['events', '$timeout', '$rootScope', function(events, $timeout, $rootScope) {

                events.on('confirm', function(opts) {
                    if (!opts) {
                        return;
                    }

                    var scope = $rootScope.$new();

                    scope.confirm = function($hide) {
                        $hide();
                        if (angular.isFunction(opts.onConfirm)) {
                            opts.onConfirm();
                        }
                    };

                    events.emit('modal', {
                        scope: scope,
                        title: 'Confirm',
                        content: opts.content,
                        animation: 'am-fade-and-slide-top',
                        template: commonBase + '/ui/Confirm.html'
                    });
                });

            }]);
        };

        return Feature;

    });

})(define);
