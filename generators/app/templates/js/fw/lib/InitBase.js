/**
 *  InitBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([], function() {

    class InitBase {

        constructor(features) {
            this.features = features;
        }

        execute() {}
    }

    return InitBase;
});
