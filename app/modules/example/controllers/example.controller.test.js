'use strict';

require('../index');
require('./example.controller.js');

describe('Example Module Test', function () {

  var controller;
  var mockScope = {};
  var location = undefined;
  var route = undefined;

  beforeEach(angular.mock.module('gaigApp.example'));

  beforeEach(angular.mock.inject(function ($controller, $rootScope, $location, $route) {
    mockScope = $rootScope.$new();
    location = $location;
    route = $route;
    controller = $controller('ExampleCtrl', {
      $scope: mockScope
    });
  }));

  it('should create a model', function () {
    controller.should.have.ownProperty('model');
  });

});