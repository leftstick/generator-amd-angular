/**
 *  Defines the Error Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['lib/FeatureBase', 'angular', './Error.html'], function(FeatureBase, angular, tpl) {

    var isFunction = angular.isFunction;

    class Feature extends FeatureBase {

        constructor() {
            super('ErrorModal');
        }

        errorEvent(events, $timeout, $rootScope, $templateCache) {
            $templateCache.put('errorTpl', tpl);

            events.on('error', function(opts) {
                if (!opts) {
                    return;
                }

                var scope = $rootScope.$new();

                scope.close = function($hide) {
                    $hide();
                    if (isFunction(opts.onClose)) {
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
                        templateUrl: 'errorTpl'
                    });
                }, 0);
            });
        }

        execute() {
            this.errorEvent.$inject = [
                'events',
                '$timeout',
                '$rootScope',
                '$templateCache'
            ];
            this.run(this.errorEvent);
        }
    }

    return Feature;

});
