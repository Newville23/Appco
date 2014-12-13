'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MaterialCtrl
 * @description
 * # MaterialCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MaterialCtrl', function($scope) {
  	$scope.atribute = {label: 'popover', class: 'md-raised md-primary md-default-theme', placement: 'right', title: 'Ubica'};
  	$scope.tools = [{content: 'tool-1'}, {content: 'tool-2'}, {content: 'tool-3'}]
  	$scope.show = function(){
  		 $scope.myVar = !$scope.myVar; 
  	};
  	$scope.close = function(){
  		$scope.myVar = !$scope.myVar;
  	};
  });

