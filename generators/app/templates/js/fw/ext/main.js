/**
 *  Return all information of external angular resources
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([
    'angular',
    'angular-animate',
    'angular-route',
    'angular-sanitize',
    'angular-strap',
    'angular-strap/dist/angular-strap.tpl',
    'angular-theme-spinner',
    'angular-smart-table',
    'angular-sweetnotifier'
], function() {

    return [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'mgcrea.ngStrap',
        'angular-theme-spinner',
        'smart-table',
        'angular-sweetnotifier'
    ];
});
