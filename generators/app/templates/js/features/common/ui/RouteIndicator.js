/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['angular', 'lib/Pluck', 'lib/FeatureBase'], function(angular, pluck, FeatureBase) {
    let element = angular.element;

    class Feature extends FeatureBase {

        constructor() {
            super('RouteIndicator');
        }

        _indicator($rootScope, Routes) {
            'ngInject';

            var $body = element(document.body);
            var classes = pluck(Routes, 'id').join(' ');

            $rootScope.$on('$routeChangeSuccess', function(e, route) {
                $body.removeClass(classes);
                if (route && route.$$route && route.$$route.id) {
                    $body.addClass(route.$$route.id);
                }
            });
        }

        execute() {
            this.run(this._indicator);
        }
    }

    return Feature;
});
