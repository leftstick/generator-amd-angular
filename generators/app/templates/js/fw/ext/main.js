/**
 *  Return all information of external angular resources
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define([
        'lodash',
        'jquery',
        'angular',
        'angular-animate',
        'angular-route',
        'angular-sanitize',
        'angular-strap',
        'angular-strap-tpl',
        'angular-loading-bar',
        'angular-theme-spinner',
        'angular-smart-table',
        'noty',
        'css!bootstrap',
        'css!bootstrap-additions',
        'css!fontawesome',
        'css!animate',
        'css!angular-loading-bar',
        'css!angular-motion',
        'css!angular-theme-spinner'
    ], function() {

        return [
            'ngAnimate',
            'ngRoute',
            'ngSanitize',
            'mgcrea.ngStrap',
            'angular-loading-bar',
            'angular-theme-spinner',
            'smart-table'
        ];

    });

}(define));
