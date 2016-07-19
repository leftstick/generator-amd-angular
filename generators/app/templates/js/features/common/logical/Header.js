/**
 *  Defines the Toolbar of whole application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['lib/FeatureBase', './Header.html', 'angular'], function(FeatureBase, HeaderTpl, angular) {

    let element = angular.element;

    class Feature extends FeatureBase {

        constructor() {
            super('HeaderModule');

            //eslint-disable-next-line no-undef
            this.$body = element(document.body);
        }

        beforeStart() {
            this.$body.prepend(HeaderTpl);
        }

        _HeaderController($scope, $rootScope) {
            'ngInject';

            $scope.route = 'home';

            $scope.activeRoute = function(name) {
                $scope.route = name;
            };

            $rootScope.$on('$routeChangeSuccess', function(e, next) {
                if (next.$$route && next.$$route.id) {
                    $scope.route = next.$$route.id;
                }
            });
        }

        execute() {
            this.controller('HeaderController', this._HeaderController);
        }
    }

    return Feature;
});
