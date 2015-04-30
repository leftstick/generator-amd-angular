/**
 *  Defines the AboutController controller
 *
 *  @author  Howard.Zuo
 *  @date    Apr 30th, 2015
 *
 */
(function(define) {
    'use strict';
    /**
     * Register the AboutController class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var AboutController = function($scope, AboutService, events) {


            $scope.showSpinner = true;

            AboutService.getDemoList()
                .success(function(data) {
                    $scope.showSpinner = false;
                    $scope.originDemolist = data;
                    $scope.demolist = [].concat($scope.originDemolist);
                }).error(function() {
                    events.emit('error', {
                        content: err
                    });
                });

            $scope.$on('$destroy', function() {});
        };

        return ['$scope', 'AboutService', 'events', AboutController];

    });

})(define);
