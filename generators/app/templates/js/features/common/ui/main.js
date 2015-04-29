/**
 *  Entrance of common ui
 *
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define([
        './Alerts',
        './Autofocus',
        './Confirm',
        './Error',
        './Footer',
        './Info',
        './Modal',
        './RouteIndicator',
        './StRatio',
        './TopNavbar'
    ], function() {
        return [].slice.call(arguments);
    });

}(define));
