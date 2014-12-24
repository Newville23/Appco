'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('ProveedorCtrl', function ($scope,  $mdDialog) {
$scope.todos = [
      { face: 'images/yeoman.png', name: 'One', tel: '3241922', nit: 'Tabs will become paginated if there isnt enough room for them.'},
      { face: 'images/yeoman.png', name: 'Two', tel: '3241922', nit: 'You can swipe left and right on a mobile device to change tabs.'},
      { face: 'images/yeoman.png', name: 'Three', tel: '3241922', nit: 'You can bind the selected tab via the selected attribute on the md-tabs element.'},
      { face: 'images/yeoman.png', name: 'Four', tel: '3241922', nit: 'If you set the selected tab binding to -1, it will leave no tab selected.'},
      { face: 'images/yeoman.png', name: 'Five', tel: '3241922', nit: 'If you remove a tab, it will try to select a new one.'},
      { face: 'images/yeoman.png', name: 'Six', tel: '3241922', nit: 'Theres an ink bar that follows the selected tab, you can turn it off if you want.'},
      { face: 'images/yeoman.png', name: 'Seven', tel: '3241922', nit: 'If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab.'},
      { face: 'images/yeoman.png', name: 'Eight', tel: '3241922', nit: 'If you look at the source, youre using tabs to look at a demo for tabs. Recursion!'},
      { face: 'images/yeoman.png', name: 'Nine', tel: '3241922', nit: 'If you set md-theme=\"green\" on the md-tabs element, youll get green tabs.'},
      { face: 'images/yeoman.png', name: 'Ten', tel: '3241922', nit: 'If youre still reading this, you should just go check out the API docs for tabs!'}
    ];

    $scope.selectedIndex = 3;

    $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete your debt?')
      .content('All of the banks have agreed to forgive you your debts.')
      .ariaLabel('Lucky day')
      .ok('Please do it!')
      .cancel('Sounds like a scam')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.alert = 'You decided to get rid of your debt.';
    }, function() {
      $scope.alert = 'You decided to keep your debt.';
    });
  };


  });
