'use strict';

describe('Directive: dvPopover', function () {

  // load the directive's module
  beforeEach(module('yoAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-popover></dv-popover>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dvPopover directive');
  }));
});
