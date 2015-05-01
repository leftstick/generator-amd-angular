/**
 *  Defines the TopNavbar Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['fw/lib/FeatureBase', 'jquery', 'tpl!common/ui/TopNavbar.html'], function(Base, $, tpl) {

        var Feature = Base.extend(function() {

            this.initializer = function() {};

            this.constructor = function() {
                this.$body = $('body');
            };

            this.beforeStart = function() {
                this.$body.prepend(tpl());
            };
        });

        return Feature;
    });

})(define);
