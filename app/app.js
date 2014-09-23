'use strict';

angular

/**
 * Initialize the main module
 *
 * All child modules must be included here
 */
  .module('gaigApp', [
    'ngRoute',
    'gaigUiBootstrap',
    require('./modules/common/common').name,
    require('./modules/home/home').name
  ])

/**
 * Config
 */
  .config(function appConfig($routeProvider) {

    /**
     * Catch undefined routes and redirect to 404
     */
    $routeProvider.otherwise({
      redirectTo: '/'
    });

  });