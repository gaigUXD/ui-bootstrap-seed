'use strict';

module.exports = function ExampleCtrl($scope) {
  var vm = this;

  (function init() {
    vm.model = {
      firstName: null,
      lastName: null
    }
  })();
};