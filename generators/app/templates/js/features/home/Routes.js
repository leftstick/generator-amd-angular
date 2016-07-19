/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['./partials/home.html'], function(tpl) {
    return [
        {
            id: 'home',
            isDefault: true,
            when: '/home',
            controller: 'HomeController',
            controllerAs: 'home',
            template: tpl
        }
    ];
});
