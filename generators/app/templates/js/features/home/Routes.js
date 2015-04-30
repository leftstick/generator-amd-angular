/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define, require) {
    'use strict';

    var features = require.toUrl('features');

    define([], function() {
        return [{
            id: 'home',
            isDefault: true,
            when: '/home',
            controller: 'HomeController',
            templateUrl: features + '/home/partials/home.html'
        }];
    });

}(define, require));
