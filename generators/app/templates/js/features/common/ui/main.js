/**
 *  Entrance of common ui
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
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
