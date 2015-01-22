'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * Controller of the yoAngularApp
 */
    function DialogController($scope, $mdDialog) {

  $scope.save = function(prov) {
     $mdDialog.hide(prov);
  };

  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

}

angular.module('yoAngularApp')
  .controller('ProveedorCtrl', function ($scope, $mdDialog, $mdSidenav, $log, $firebase) {



var refProveedores = new Firebase('https://solutionsapp.firebaseio.com/proveedor');

var sync = $firebase(refProveedores);

$scope.proveedores = sync.$asArray();


$scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
                      .then(function(){
                          $log.debug('toggle left is done');
                      });
  };

 $scope.toggleRight = function(name) {


    $mdSidenav('right').toggle()
                        .then(function(){

                          $scope.name = name;
                        });
  };

 $scope.showAdvanced = function(ev) {
    $mdDialog.show({
     controller: DialogController,
      templateUrl: 'views/dialog/newProveedor.html',
      targetEvent: ev,
    })
    .then(function(prov) {
            $scope.proveedores.$add({face: 'images/yeoman.png', name: prov.name, nit: prov.nit, dirc: prov.dicc, city: prov.city, tel: prov.tel, mail: prov.mail});
    });
  };

    $scope.checked = true; // variable que inabilita la edición de proveedores y los botones de update and cancel

    $scope.disableClick = function() {

        $scope.checked = false;
        return true;
    };

//Cancela la acción de editar proveedores
  $scope.cancel = function() {
     $mdSidenav('right').close().then(function(){$scope.checked = true;});
     

  };

//Función de boton update info de proveedores 

  $scope.update = function(){
    $scope.proveedores.$save($scope.name).then(function(){
      $mdSidenav('right').close();
      $scope.checked = true;

    });
  };

     $scope.close = function() {
     $mdSidenav('left').close();

  };

});







