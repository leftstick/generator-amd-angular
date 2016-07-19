/**
 *  Entrance of common service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['./ui/main', './logical/main'], function(ui, logical) {
    return [...ui, ...logical];
});
