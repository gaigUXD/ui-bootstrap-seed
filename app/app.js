'use strict';

angular

/**
 * Initialize the main module
 *
 * All child modules must be included here
 */
  .module('gaigApp', [
    'gaigUiBootstrap',
    'ngRoute',
    require('./modules/common/common').name,
    require('./modules/header/header').name,
    require('./modules/footer/footer').name,
    require('./modules/404/404').name,
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
      redirectTo: '404'
    });

  });