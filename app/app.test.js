'use strict';

require('./app');
require('./common/constants/settings');
require('./common/controllers/app.controller');

describe('App Module Test', function () {

  var mockController, mockLocation, mockRoute, mockHttpBackend, mockScope, mockSettings;

  beforeEach(angular.mock.module('gaigApp'));

  beforeEach(angular.mock.inject(function ($controller, $rootScope, $location, $route, $templateCache, $httpBackend, appSettings) {
    mockScope = $rootScope.$new();
    mockSettings = appSettings;
    mockLocation = $location;
    mockRoute = $route;
    mockHttpBackend = $httpBackend;
    mockController = $controller('AppCtrl', {
      $scope: mockScope
    });
  }));

  it('should create a model', function () {
    mockController.should.have.ownProperty('model');
  });

  it('loads app settings', function () {
    mockSettings.should.not.be.undefined;
  });

  it('sets the page title to loading', function () {
    mockSettings.should.have.ownProperty('loadingString');
    mockController.model.pageTitle.should.equal(mockSettings.loadingString);
  });

  it('should handle $routeChangeStart', function () {
    mockHttpBackend.whenGET('templates/home.html').respond(true);
    mockLocation.path('/');
    mockScope.$apply();

    mockController.flags.isLoading.should.be.true;
    mockController.model.pageTitle.should.equal(mockSettings.loadingString);
  });

  it('should handle $routChangeSuccess', function () {
    mockHttpBackend.whenGET('templates/home.html').respond(true);
    mockLocation.path('/');
    mockScope.$apply();
    mockHttpBackend.flush();
    mockController.flags.isLoading.should.be.false;
    mockController.model.pageTitle.should.equal(mockRoute.current.pageTitle);
  });

});