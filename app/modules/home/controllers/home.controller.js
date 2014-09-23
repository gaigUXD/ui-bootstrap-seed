'use strict';

module.exports = function HomeCtrl() {
  var vm = this;

  (function init() {
    vm.model = {
      welcomeMsg: 'Welcome'
    };
  })();
};