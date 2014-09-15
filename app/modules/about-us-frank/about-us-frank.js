'use strict';

module.exports = angular.module('aboutUsFrank', [])

  .controller('AboutUsFrankCtrl', require('./controllers/about-us-frank.controller'))

  .config(function aboutUsFrankConfig($routeProvider) {

    $routeProvider
      .when('/aboutUsFrank', {
        controller: 'AboutUsFrankCtrl',
        controllerAs: 'aboutUsFrank',
        templateUrl: 'templates/about-us-frank.html',
        pageTitle: 'About Us Frank',
        pageIcon: null
      });

  });