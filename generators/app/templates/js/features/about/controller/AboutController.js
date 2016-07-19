/**
 *  Defines the AboutController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define([], function() {

    class AboutController {

        /*@ngInject*/
        constructor($scope) {
            this.$scope = $scope;

            this._init_();
            this._destroy_();
        }

        _init_() {}

        _destroy_() {
            this.$scope.$on('$destroy', function() {});
        }
    }

    return AboutController;

});
