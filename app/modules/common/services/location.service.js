'use strict';

module.exports = function locationService($rootScope, $route, settings, observerService) {

  var location = this;

  // Inherit the properties of the observer service
  angular.extend(location, observerService);

  /* ===============================================================================================
   Init
   ============================================================================================== */
  (function init() {

    location.model = {
      pageIcon: $route.current.pageIcon,
      pageTitle: $route.current.pageTitle
    };

    $rootScope.$on('$routeChangeStart', handleRouteChangeStart);
    $rootScope.$on('$routeChangeSuccess', handleRouteChangeSuccess);
  })();

  /* ===============================================================================================
   Private functions
   ============================================================================================== */
  function handleRouteChangeStart() {
    location.model.pageIcon = null;
    location.model.pageTitle = settings.loadingString;
    location.notifyObservers();
  }

  function handleRouteChangeSuccess() {
    location.model.pageIcon = $route.current.pageIcon;
    location.model.pageTitle = $route.current.pageTitle;
    location.notifyObservers();
  }
};