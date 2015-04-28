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
                noty('success', '这里是成功的noty');
            };

            $scope.showErrorNoty = function() {
                noty('error', '这里是错误的noty');
            };

            $scope.showInfoNoty = function() {
                noty('info', '这里是信息的noty');
            };

            $scope.showInfo = function() {
                events.emit('info', {
                    content: '这个就是简单的提示窗',
                    onClose: function() {
                        noty('info', '提示窗关闭了!');
                    }
                });
            };

            $scope.showConfirm = function() {
                events.emit('confirm', {
                    content: '这个是确认框',
                    onConfirm: function() {
                        noty('info', '点击确认了');
                    }
                });
            };

            $scope.showCustom = function() {
                events.emit('modal', {
                    scope: $scope,
                    title: '自定义',
                    animation: 'am-fade-and-slide-top',
                    template: features + '/home/partials/custom.html'
                });
            };

            $scope.closeCustom = function($hide) {
                $hide();
                noty('info', '自定义modal关闭了!');
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
                radio: 'renhe'
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
