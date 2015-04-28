/**
 *
 *  Routes module expose route information used in home feature
 *
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
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
