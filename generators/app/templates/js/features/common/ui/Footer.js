/**
 *  Defines the Footer Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([
    'lib/FeatureBase',
    'angular',
    './Footer.html',
    'etc/config'
], function(FeatureBase, angular, tpl, config) {

    var element = angular.element;

    class Feature extends FeatureBase {

        constructor() {
            super('FooterModule');
            this.$body = element(document.body);
        }

        beforeStart() {
            this.$body.append(tpl);
        }

        FooterCtrl($scope) {
            $scope.config = config;
        }

        execute() {
            this.FooterCtrl.$inject = ['$scope'];
            this.mod.controller('FooterCtrl', this.FooterCtrl);
        }
    }

    return Feature;

});
