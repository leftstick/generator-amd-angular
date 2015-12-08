/**
 *  Defines the Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['lib/FeatureBase', 'angular', 'lib/Omit'], function(FeatureBase, angular, omit) {

    var merge = angular.merge;

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

    class Feature extends FeatureBase {

        constructor() {
            super('ModalWrapper');
        }

        modalEvent(events, $modal) {
            events.on('modal', function(opts) {
                var options = merge({}, defaults, omit(opts, [
                    'scope'
                ]));
                options.title = opts.title;
                options.scope = opts.scope;
                $modal(options);
            });
        }

        execute() {
            this.modalEvent.$inject = ['events', '$modal'];
            this.run(this.modalEvent);
        }
    }

    return Feature;

});
