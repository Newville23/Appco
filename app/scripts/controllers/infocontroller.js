'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:InfocontrollerCtrl
 * @description
 * # InfocontrollerCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('InfoCtrl', function ($scope, $log, $firebase) {
		    //sincronizacion de array de materiales
		var refmateriales = new Firebase('https://solutionsapp.firebaseio.com/materiales');

		var sync = $firebase(refmateriales);

		$scope.materiales = sync.$asArray();

		//Sincronizacion de array de proveedores 
		var refProveedores = new Firebase('https://solutionsapp.firebaseio.com/proveedor');

		var syncpro = $firebase(refProveedores);

			$scope.proveedores = syncpro.$asArray();

		//variable de conteo de items
		var count = 1;

		$scope.items = [];
		 
		 $scope.addItem = function() {
		 	
		   	$scope.items.push({item: count, descripcion:'', cant: '0', vunit:'', total:'' });
		   	count = count + 1;
		 };
		 
		 //remove the last item from the list of materiales in the OC

		 $scope.removeItem = function() {
		    $scope.items.pop();
		 };

		$scope.getTotal = function() {
        var total = 0;
        angular.forEach($scope.items, function(item) {
            total += item.cant * item.vunit;
        });

        return total;
    };
		    
  });
		
