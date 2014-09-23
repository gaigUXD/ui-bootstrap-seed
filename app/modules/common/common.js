'use strict';

module.exports = angular.module('common', [])

  .controller('GlobalCtrl', require('./controllers/global.controller.js'))

  .service('observerService', require('./services/observer.service.js'))

  .constant('settings', require('./constants/settings'));