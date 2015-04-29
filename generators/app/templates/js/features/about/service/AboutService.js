/**
 *  Defines the AboutService
 *
 *  @author  Howard.Zuo
 *  @date    Apr 15th, 2015
 *
 */
(function(define) {
    'use strict';

    /**
     * Register the AboutService class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var AboutService = function($http, utils) {

            this.getDemoList = function() {
                return $http.get(utils.getapi('/demolist'));
            };

        };

        return ['$http', 'utils', AboutService];

    });

})(define);
