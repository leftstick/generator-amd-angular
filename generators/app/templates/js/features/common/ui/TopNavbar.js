/**
 *  Defines the TopNavbar Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define([
        'lib/FeatureBase',
        'jquery',
        './TopNavbar.html',
        './Aside.html'
    ], function(Base, $, tpl, asideTpl) {

        var Feature = function() {
            Base.call(this, 'TopnavModule');
            this.$body = $('body');
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.beforeStart = function() {
            this.$body.prepend(tpl);
        };

        Feature.prototype.run = function() {
            this.mod.run([
                '$templateCache',
                function($templateCache) {
                    $templateCache.put('aside', asideTpl);
                }
            ]);
            this.mod.controller('HeaderCtrl', [
                function() {}
            ]);
        };

        return Feature;
    });

})(define);
