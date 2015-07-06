'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
	  .controller('MainCtrl', function ($scope,  $mdToast) {

	  			 $scope.toastPosition = {  bottom: false, top: true, left: false, right: true }; 
			      
			      $scope.getToastPosition = function() {
				    return Object.keys($scope.toastPosition)
				      .filter(function(pos) { return $scope.toastPosition[pos]; })
				      .join(' ');
				  };
			    $scope.asisToast = function() {
				    	if ($scope.asist === true) {

							    $mdToast.show(
							      $mdToast.simple()
							        .content('Ahora puede tomar la asistencia!')
							        .position($scope.getToastPosition())
							        .hideDelay(3000)
						    );
				    	};

				  };
  });
