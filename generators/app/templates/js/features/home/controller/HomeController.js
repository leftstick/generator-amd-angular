/**
 *  Defines the HomeController controller
 *
 *  @author  Hao.Zuo
 *  @date    Mar 25th, 2015
 *
 */
(function(define) {
    'use strict';

    var features = requirejs.toUrl('features');

    /**
     * Register the HomeController class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var HomeController = function($scope, events, utils, HomeService) {

            var noty = function(type, msg) {
                events.emit('alert', {
                    type: type,
                    message: msg,
                    onShow: function() {
                        console.log('displaying');
                    },
                    onClose: function() {
                        console.log('closed');
                    }
                });
            };

            $scope.showSuccessNoty = function() {
                noty('success', 'This is success noty');
            };

            $scope.showErrorNoty = function() {
                noty('error', 'This is error noty');
            };

            $scope.showInfoNoty = function() {
                noty('info', 'This is info noty');
            };

            $scope.showInfo = function() {
                events.emit('info', {
                    content: 'It\'s simple info dialog',
                    onClose: function() {
                        noty('info', 'Dialog closed!');
                    }
                });
            };

            $scope.showConfirm = function() {
                events.emit('confirm', {
                    content: 'It\'s confirm dialog',
                    onConfirm: function() {
                        noty('info', 'Confirmed!');
                    }
                });
            };

            $scope.showCustom = function() {
                events.emit('modal', {
                    scope: $scope,
                    title: 'It\'s custom dialog',
                    animation: 'am-fade-and-slide-top',
                    template: features + '/home/partials/custom.html'
                });
            };

            $scope.closeCustom = function($hide) {
                $hide();
                noty('info', 'custom modal closed!');
            };

            HomeService.getStates()
                .success(function(data) {
                    $scope.states = data;
                });

            HomeService.getMenus()
                .success(function(data) {
                    $scope.menus = data;
                });

            $scope.button = {
                radio: 'right'
            };

            HomeService.getDropdown()
                .success(function(data) {
                    $scope.dropdowns = data;
                });

            $scope.selectTab = function(tab, $event) {
                utils.stopEvent($event);
                if (tab.active) {
                    return;
                }
                tab.active = true;
                _.chain($scope.tabs)
                    .reject({
                        name: tab.name
                    })
                    .each(function(t) {
                        t.active = false;
                    });
            };

            $scope.$on('$destroy', function() {});
        };

        return ['$scope', 'events', 'utils', 'HomeService', HomeController];

    });

})(define);
