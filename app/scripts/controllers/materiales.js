'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MaterialCtrl
 * @description
 * # MaterialCtrl
 * Controller of the yoAngularApp
 */

  function DialogMaterial($scope, $mdDialog) {

  $scope.save = function(mat) {
     $mdDialog.hide(mat);
  };

  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

}

angular.module('yoAngularApp')
  .controller('MaterialesCtrl', function( $scope, $mdDialog, $mdSidenav, $log, $firebase) {

//sincronizacion de array de materiales
var refmateriales = new Firebase('https://solutionsapp.firebaseio.com/materiales');

var sync = $firebase(refmateriales);

$scope.materiales = sync.$asArray();

//Sincronizacion de array de proveedores 
var refProveedores = new Firebase('https://solutionsapp.firebaseio.com/proveedor');

var syncpro = $firebase(refProveedores);

$scope.proveedores = syncpro.$asArray();

$scope.tipos = [{tipo:'Matería prima'},{tipo: 'Producto'}];

$scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };

 $scope.toggleRight = function(name) {


    $mdSidenav('right').toggle()
                        .then(function(){

                          $scope.name = name;
                        });
  };

 $scope.showAdvanced = function(ev) {
    $mdDialog.show({
     controller: DialogMaterial,
      templateUrl: 'views/dialog/newMaterial.html',
      targetEvent: ev,
    })
    .then(function(mat) {
            $scope.materiales.$add({face: 'images/material.png', id: mat.id, descripcion: mat.desc, proveedor: mat.prov, fabricante: mat.fab, tipo: mat.tip, unidad: mat.unt, vunit: mat.vunit});
    });
  };

    $scope.checked = true; // variable que inabilita la edición de materiales y los botones de update and cancel

    $scope.disableClick = function() {

        $scope.checked = false;
        return true;
    };

//Cancela la acción de editar materiales
  $scope.cancel = function() {
     $mdSidenav('right').close().then(function(){$scope.checked = true;});
     

  };

//Función de boton update info de materiales 

  $scope.update = function(){
    $scope.materiales.$save($scope.name).then(function(){
      $mdSidenav('right').close();
      $scope.checked = true;

    });
  };


  });

