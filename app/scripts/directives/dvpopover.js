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
      template: '<md-button class="{{atribute.class}}">{{atribute.label}}</md-button>',
      restrict: 'E',
      link: function postLink(scope, element) {

      		var properties = {
      			content: scope.atribute.bodypop,
      			placement: scope.atribute.placement,
      			html: true,
      			tittle: scope.atribute.title
      		};

            $(element).popover(properties);

      }
    };
  });
