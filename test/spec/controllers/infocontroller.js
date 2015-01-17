'use strict';

describe('Controller: InfocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var InfocontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfocontrollerCtrl = $controller('InfocontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
