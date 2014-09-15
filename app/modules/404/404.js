'use strict';

module.exports = angular.module('notFound', [])

  .config(function notFoundConfig($routeProvider) {

    $routeProvider

      // 404
      .when('/404', {
        templateUrl: 'templates/404.html',
        pageTitle: '404'
      })

  });