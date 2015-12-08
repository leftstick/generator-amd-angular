/**
 *  Entrance of config
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([
    './AppConfig',
    './NotifierConfig',
    './RouterConfig',
    './SSOConfig'
], function() {
    return [].slice.call(arguments);
});
