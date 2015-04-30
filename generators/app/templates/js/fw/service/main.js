/**
 *  Entrance of services
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define([
        './Events',
        './Utils'
    ], function() {
        return [].slice.call(arguments, 0);
    });

}(define));
