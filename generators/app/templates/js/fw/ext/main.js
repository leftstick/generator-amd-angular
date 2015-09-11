/**
 *  Return all information of external angular resources
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
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
        'angular-strap/dist/angular-strap.tpl',
        'angular-loading-bar',
        'angular-theme-spinner',
        'angular-smart-table',
        'noty',
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap-additions/dist/bootstrap-additions.css',
        'font-awesome/css/font-awesome.css',
        'animate.css/animate.css',
        'angular-loading-bar/src/loading-bar.css',
        'angular-motion/dist/angular-motion.css',
        'angular-theme-spinner/dist/angular-theme-spinner.min.css'
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
