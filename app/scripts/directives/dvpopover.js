'use strict';

/**
 * @ngdoc directive
 * @name yoAngularApp.directive:dvPopover
 * @description
 * # dvPopover
 */
angular.module('yoAngularApp')
  .directive('dvPopover', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/popover.html'

      /*link: function postLink(scope, element) {

      		var properties = {
      			content: scope.atribute.bodypop,
      			placement: scope.atribute.placement,
      			html: true,
      			tittle: scope.atribute.title
      		};

            $(element).popover(properties);

      }*/
    };
  });
