/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['lib/ConfiguratorBase'], function(ConfiguratorBase) {

    class Configurator extends ConfiguratorBase {
        constructor(features, app) {
            super(features, app);
        }

        _httpConfig($httpProvider) {
            'ngInject';

            $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
            $httpProvider.defaults.withCredentials = true;
        }

        execute() {
            this.config(this._httpConfig);
        }
    }

    return Configurator;

});
