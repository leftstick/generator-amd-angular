/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['lib/ConfiguratorBase', 'etc/config'], function(ConfiguratorBase, config) {

    class Configurator extends ConfiguratorBase {
        constructor(features, app) {
            super(features, app);
        }

        execute() {
            this.constant('CONF', config);
        }
    }

    return Configurator;

});
