/**
 *  Defines the Footer Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define, doc) {
    'use strict';

    define(['lib/FeatureBase', 'angular', './Footer.html'], function(Base, angular, tpl) {

        var Feature = function() {
            Base.call(this, 'FooterModule');
            this.config = __config;
            this.$body = angular.element(doc.body);
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.beforeStart = function() {
            this.$body.append(tpl);
        };

        Feature.prototype.run = function() {
            var self = this;
            this.mod.controller('FooterCtrl', [
                '$scope',
                function($scope) {
                    $scope.config = self.config;
                }
            ]);
        };

        return Feature;

    });

})(define, document);
