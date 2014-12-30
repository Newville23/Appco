'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('ProveedorCtrl', function ($scope,  $mdDialog, $mdSidenav, $log) {

$scope.proveedores = [
      { face: 'images/yeoman.png', name: 'One', mail: '', tel: '3241922', nit: '900-6545-1'},
      { face: 'images/yeoman.png', name: 'Two', mail: '', tel: '3241922', nit: '900-6545-1.'},
      { face: 'images/yeoman.png', name: 'Three', mail: '', tel: '3241922', nit: '900-6545-1'},

    ];

 $scope.toggleRight = function() {
    $mdSidenav('right').toggle()
                        .then(function(){
                          $log.debug("toggle RIGHT is done");
                        });
  };

 $scope.showAdvanced = function(ev) {
    $mdDialog.show({
     controller: DialogController,
      templateUrl: 'views/dialog/newProveedor.html',
      targetEvent: ev,
    })
    .then(function(prov) {
            $scope.proveedores.push({face: 'images/yeoman.png', name: prov.name, nit: prov.nit, tel: prov.tel, mail: prov.mail});
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

