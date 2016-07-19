/**
 *
 *  config.js which contains the configuration of app, and it should never be cached
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
'use strict';

define([], function() {
    return {appname: '<%= answers.name %>', version: '1.0.0'};
});
