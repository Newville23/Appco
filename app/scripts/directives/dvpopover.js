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


    };
  });
