'use strict';

describe('Controller: MaterialCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var MaterialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaterialCtrl = $controller('MaterialCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
