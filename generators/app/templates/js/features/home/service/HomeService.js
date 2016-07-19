/**
 *  Defines the HomeService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define([], function() {

    class HomeService {

        /*@ngInject*/
        constructor($http, utils) {
            this.$http = $http;
            this.utils = utils;
        }

        getInitTodos() {
            return Promise.resolve([
                {
                    finished: true,
                    txt: 'Learn JavaScript'
                },
                {
                    txt: 'Learn AngularJS'
                },
                {
                    txt: 'Learn webpack'
                },
                {
                    txt: 'Learn node'
                }
            ]);
        }

    }

    return HomeService;
});
