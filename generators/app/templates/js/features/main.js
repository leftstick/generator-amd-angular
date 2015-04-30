/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define([
        './about/main',
        './home/main',
        './common/main'
    ], function(about, home, common) {
        return [about, home].concat(common);
    });

}(define));
