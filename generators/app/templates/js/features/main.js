/**
 *  Entrance of features
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
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
