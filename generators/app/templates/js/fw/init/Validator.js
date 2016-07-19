/**
 *  HeadInit set all needed head info to the index.html.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['lib/InitBase', 'lib/Pluck'], function(InitBase, pluck) {

    class Initializer extends InitBase {
        constructor(features) {
            super(features);
        }

        execute() {
            if (!this.features || this.features.length === 0) {
                return console.warn('No features loaded');
            }

            var modNames = pluck(this.features, 'export').sort();
            for (var i = 0; i < modNames.length - 1; i++) {
                if (modNames[i] === modNames[i + 1]) {
                    throw new Error('Duplicated Module: [ ' + modNames[i] + ' ], you have to specify another name');
                }
            }
        }
    }

    return Initializer;

});
