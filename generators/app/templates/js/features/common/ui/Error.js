/**
 *  Defines the Error Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    var commonBase = requirejs.toUrl('common');

    define(['fw/lib/FeatureBase', 'angular'], function(Base, angular) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('ErrorModal');
            };

            this.run = function() {
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

        });

        return Feature;

    });

})(define);
