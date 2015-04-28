/**
 *  RouterConfig collect route information from each feature and combine them
 *  with ngRoute.
 *
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lodash'], function(_) {

        var Configurator = function(features, app) {
            this.features = features;
            this.app = app;
        };

        Configurator.prototype.run = function() {

            if (!this.features || this.features.length === 0) {
                console.warn('No features loaded');
                return;
            }

            var routes = _.chain(this.features)
                .filter('routes')
                .pluck('routes')
                .flatten()
                .value();

            this.app.constant('Routes', routes);

            this.app.config(['$locationProvider', '$routeProvider',
                function($locationProvider, $routeProvider) {

                    //config each router
                    _.each(routes, function(ro) {
                        $routeProvider
                            .when(ro.when, _.omit(ro, ['when']));
                    });

                    //config default page
                    var defaultRouter = _.find(routes, 'isDefault');
                    if (defaultRouter) {
                        $routeProvider.otherwise({
                            redirectTo: defaultRouter.when
                        });
                    }

                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: true
                    });

                }
            ]);
        };

        return Configurator;

    });

}(define));
