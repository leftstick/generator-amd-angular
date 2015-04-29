/**
 *  Entrance of config
 *
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
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
