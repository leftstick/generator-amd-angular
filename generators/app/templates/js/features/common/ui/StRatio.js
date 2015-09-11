/**
 *
 *  The stRatio.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
(function(define) {
    'use strict';

    define(['lib/FeatureBase'], function(Base) {

        var Feature = function() {
            Base.call(this, 'StRatioModule');
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.run = function() {
            var dir = function() {
                return {
                    restrict: 'A',
                    link: function($scope, element, attr) {
                        var ratio = +(attr.stRatio);
                        element.css('width', ratio + '%');
                    }
                };
            };

            this.mod.directive('stRatio', [dir]);
        };

        return Feature;

    });


})(define);
