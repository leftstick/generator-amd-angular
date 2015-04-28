/**
 *
 *  Routes module expose route information used in about feature
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
            id: 'about',
            isDefault: false,
            when: 'about',
            controller: 'AboutController',
            templateUrl: features + '/about/partials/about.html'
        }];
    });

}(define, require));
