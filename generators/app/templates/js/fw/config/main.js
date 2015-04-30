/**
 *  Entrance of config
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define([
        './AppConfig',
        './LoadingBarConfig',
        './RouterConfig',
        './SSOConfig'
    ], function() {
        return [].slice.call(arguments, 0);
    });

}(define));
