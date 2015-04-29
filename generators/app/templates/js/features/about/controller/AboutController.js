/**
 *  Defines the AboutController controller
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';
    /* jshint -W100 */

    /**
     * Register the AboutController class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var AboutController = function($scope, AboutService) {


            $scope.showSpinner = true;

            AboutService.getDemoList()
                .success(function(data) {
                    $scope.showSpinner = false;
                    $scope.originDemolist = data;
                    $scope.demolist = [].concat($scope.originDemolist);
                }).error(function() {
                    alert('sdfsf');
                });

            $scope.$on('$destroy', function() {});
        };

        return ['$scope', 'AboutService', AboutController];

    });

})(define);
