'use strict';

module.exports = function NavhelperCtrl($scope, locationService) {
  var vm = this;

  (function init() {
    vm.model = {
      pageTitle: null,
      pageIcon: null
    };

    locationService.registerObserver(updateNavhelper, $scope);
  })();

  /* ===============================================================================================
   Members
   ============================================================================================== */


  /* ===============================================================================================
   Private
   ============================================================================================== */
  function updateNavhelper() {
    vm.model.pageIcon = locationService.model.pageIcon;
    vm.model.pageTitle = locationService.model.pageTitle;
  }

};