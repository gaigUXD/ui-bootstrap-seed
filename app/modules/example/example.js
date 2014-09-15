'use strict';

module.exports = angular.module('example', [])

  .controller('ExampleCtrl', require('./controllers/example.controller.js'))

  .config(function exampleConfig($routeProvider) {

    $routeProvider
      .when('/example', {
        controller: 'ExampleCtrl',
        controllerAs: 'example',
        templateUrl: 'templates/example.html',
        pageTitle: 'Example',
        pageIcon: 'gaig-icon-bullhorn'
      });

  });