'use strict';

module.exports = function HomeCtrl() {
  var vm = this;

  console.log('asdf');


  (function init() {
    vm.model = {
      welcomeMsg: 'Welcome'
    };
  })();
};