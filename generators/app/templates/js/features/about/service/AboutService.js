/**
 *  Defines the AboutService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([], function() {

    var AboutService = function($http, utils) {

        this.getDemoList = function() {
            return $http.get(utils.getApi('/demolist'));
        };

    };

    AboutService.$inject = ['$http', 'utils'];

    return AboutService;

});
