'use strict';

describe('Directive: <%= names.camel %>', function () {

  // load the directive's module
  beforeEach(module('pouchdb.<%= names.camel %>'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the <%= names.camel %> directive');
  }));
});
