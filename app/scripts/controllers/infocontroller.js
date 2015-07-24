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
	//sincronizacion de array de ordenes de compra

		var refOc = new Firebase('https://solutionsapp.firebaseio.com/Ocs');

		var syncOc = $firebase(refOc);

		$scope.Ocs = syncOc.$asArray();

	 //sincronizacion de array de materiales
		var refmateriales = new Firebase('https://solutionsapp.firebaseio.com/materiales');

		var sync = $firebase(refmateriales);

		$scope.materiales = sync.$asArray();

	//Sincronizacion de array de proveedores 
		var refProveedores = new Firebase('https://solutionsapp.firebaseio.com/proveedor');

		var syncpro = $firebase(refProveedores);

		$scope.proveedores = syncpro.$asArray();

   //$scopes

    $scope.demo 
    = {
        topDirections:  'up',
        bottomDirections: ['down', 'right'],
        isOpen: false,
       selectedMode: 'md-fling',
        selectedDirection: 'up'
      };



	//variable de conteo de items
		var count = 1;

		$scope.items = [];
		$scope.titems = {};

		$scope.titems = angular.copy($scope.items);
		 
		angular.forEach($scope.titems, function(titem){
			$scope.items.vunit = titem.descripcion.vunit;  
		});	
		 
		 $scope.addItem = function() {
		 	
		   	$scope.items.push({item: count, descripcion:'', cant: '1'});
		   	count = count + 1;
		 };
		 
	

		//remove the last item from the list of materiales in the OC

		 $scope.removeItem = function() {
		    $scope.items.pop();
		    count = count -1;
		 };

		$scope.total = function() {
	        var total = 0;
	        angular.forEach($scope.items, function(item) {
	        total += item.cant * item.descripcion.vunit;

        });
	       
	       
        	return total;
    };

     $scope.saveOc = function(soc) {
     			
     			var total = 0;
	        	angular.forEach($scope.items, function(item) {
	        	total += item.cant * item.descripcion.vunit;
	        	});
		  		
		  		$scope.Ocs.$add({ id: "1", items: $scope.items, fecha:'' , subtotal:'', iva:'', total: total});
		 	
		 };

  });
		
