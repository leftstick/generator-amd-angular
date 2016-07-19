/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['./about/main', './home/main', './common/main'], function(about, home, common) {
    return [about, home, ...common];
});
