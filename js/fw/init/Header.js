/**
 *  HeadInit set all needed head info to the index.html.
 *
 *
 *  @author  Hao.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define, global) {
    'use strict';

    define(['tpl!etc/config.json', 'jquery'], function(tpl, $) {

        var Initializer = function() {
            this.head = $(global.document.head);
            this.config = JSON.parse(tpl());
        };

        Initializer.prototype.title = function(t) {
            var title = $('<title></title>');
            title.text(t);
            this.head.append(title);
        };

        Initializer.prototype.base = function(attr) {
            var base = $('<base>');
            base.attr(attr);
            this.head.find('base').remove();
            this.head.append(base);
        };

        Initializer.prototype.meta = function(attr) {
            var meta = $('<meta>');
            meta.attr(attr);
            this.head.append(meta);
        };

        Initializer.prototype.run = function() {
            this.title(this.config.appname);
            this.base({
                href: '/' + (this.config.base ? this.config.base + '/' : '')
            });

            this.meta({
                'charset': 'utf-8'
            });
            this.meta({
                'name': 'viewport',
                'content': 'width=device-width, initial-scale=0.25, minimum-scale=0.25, maximum-scale=1.0, user-scalable=yes, minimal-ui'
            });
            this.meta({
                'name': 'renderer',
                'content': 'webkit'
            });
            this.meta({
                'http-equiv': 'X-UA-Compatible',
                'content': 'IE=edge,chrome=1'
            });
            this.meta({
                'name': 'apple-mobile-web-app-capable',
                'content': 'yes'
            });
            this.meta({
                'name': 'apple-mobile-web-app-capable',
                'content': 'yes'
            });
        };

        return Initializer;

    });

}(define, window));
