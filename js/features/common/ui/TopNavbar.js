/**
 *  Defines the TopNavbar Module.
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define(['angular', 'jquery', 'tpl!common/ui/TopNavbar.html'], function(angular, $, tpl) {

        var Feature = function() {
            this.$body = $('body');
        };

        Feature.prototype.beforeStart = function() {
            this.$body.prepend(tpl());
        };

        Feature.prototype.run = function() {};

        return Feature;

    });

})(define);
