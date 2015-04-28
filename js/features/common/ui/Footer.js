/**
 *  Defines the Footer Module.
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define(['angular', 'jquery', 'tpl!common/ui/Footer.html', 'tpl!etc/config.json'], function(angular, $, tpl, config) {

        var Feature = function() {
            this.config = JSON.parse(config());
            this.$body = $('body');
        };

        Feature.prototype.beforeStart = function() {
            this.$body.append(tpl({
                config: this.config
            }));
        };

        Feature.prototype.run = function() {};

        return Feature;

    });

})(define);
