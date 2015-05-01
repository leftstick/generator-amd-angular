/**
 *  Defines the Confirm Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    var commonBase = requirejs.toUrl('common');

    define(['fw/lib/FeatureBase'], function(Base) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('ConfirmModal');
            };

            this.run = function() {
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

        });

        return Feature;

    });

})(define);
