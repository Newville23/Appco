'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('ProveedorCtrl', function ($scope, $mdDialog, $mdSidenav, $log, $firebase) {

var refProveedores = new Firebase('https://solutionsapp.firebaseio.com/proveedor');

var sync = $firebase(refProveedores);

$scope.proveedores = sync.$asArray();

 $scope.toggleRight = function(name) {
    $mdSidenav('right').toggle()
                        .then(function(){
                          $log.debug('toggle RIGHT is done');
                        });
  };

 $scope.showAdvanced = function(ev) {
    $mdDialog.show({
     controller: DialogController,
      templateUrl: 'views/dialog/newProveedor.html',
      targetEvent: ev,
    }) 
    .then(function(prov) {
            $scope.proveedores.$add({face: 'images/yeoman.png', name: prov.name, nit: prov.nit, tel: prov.tel, mail: prov.mail});
    });
  };

});




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
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

