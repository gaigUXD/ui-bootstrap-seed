'use strict';

module.exports = angular.module('${app}.common', [])

  .controller('GlobalCtrl', require('./controllers/global.controller.js'))
  .controller('NavhelperCtrl', require('./controllers/navhelper.controller.js'))

  .service('observerService', require('./services/observer.service.js'))
  .service('locationService', require('./services/location.service.js'))

  .constant('settings', require('./constants/settings'));