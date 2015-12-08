/**
 *  NotifierConfig set angular-sweetnotifier needed configuration
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['lib/ConfiguratorBase'], function(ConfiguratorBase) {

    class Configurator extends ConfiguratorBase {
        constructor(features, app) {
            super(features, app);
        }

        notifierConfig(notifierProvider) {
            notifierProvider.setPlacement('top', 'right');
            notifierProvider.setUseNativeWhileBlur(true);
        }

        execute() {
            this.notifierConfig.$inject = ['notifierProvider'];
            this.config(this.notifierConfig);
        }
    }

    return Configurator;

});
