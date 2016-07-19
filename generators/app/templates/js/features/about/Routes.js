/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['./partials/about.html'], function(tpl) {
    return [
        {
            id: 'about',
            isDefault: false,
            when: '/about',
            controller: 'AboutController',
            controllerAs: 'about',
            template: tpl
        }
    ];
});
