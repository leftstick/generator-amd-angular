/**
 *  Defines the TopNavbar Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([
    'lib/FeatureBase',
    'angular',
    './TopNavbar.html',
    './Aside.html'
], function(FeatureBase, angular, tpl, asideTpl) {

    var element = angular.element;

    class Feature extends FeatureBase {

        constructor() {
            super('TopnavModule');
            this.$body = element(document.body);
        }

        beforeStart() {
            this.$body.prepend(tpl);
        }

        templateCaching($templateCache) {
            $templateCache.put('aside', asideTpl);
        }

        HeaderCtrl($scope) {}

        execute() {
            this.templateCaching.$inject = ['$templateCache'];
            this.run(this.templateCaching);

            this.HeaderCtrl.$inject = ['$scope'];
            this.controller('HeaderCtrl', this.HeaderCtrl);
        }
    }

    return Feature;
});
