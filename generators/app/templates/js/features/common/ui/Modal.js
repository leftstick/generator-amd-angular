/**
 *  Defines the Modal
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define(['angular', 'lodash'], function(angular, _) {

        var defaults = {
            animation: 'am-fade',
            backdropAnimation: 'am-fade',
            placement: 'top',
            title: '',
            content: '',
            html: false,
            backdrop: true,
            keyboard: true,
            show: true,
            container: false,
            contentTemplate: false,
            prefixEvent: 'modal',
            id: ''
        };

        var Feature = function() {
            this.export = 'ModalWrapper';
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {};

        Feature.prototype.run = function() {

            this.mod.run(['events', '$modal', function(events, $modal) {

                events.on('modal', function(opts) {
                    var options = _.defaults(opts, defaults);
                    options.title = opts.title;
                    $modal(options);
                });

            }]);
        };

        return Feature;

    });

})(define);
