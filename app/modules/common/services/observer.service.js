'use strict';

module.exports = function observerService() {
  var observerService = this;
  var observers = [];

  observerService.registerObserver = function (fn, scope) {
    var observerExists = false;
    var currentIndex = 0;
    var observersLength = observers.length;

    // execute observer function once
    fn();

    for (currentIndex; currentIndex < observersLength; currentIndex++) {
      if (observers[currentIndex] === fn) {
        observerExists = true;
        break;
      }
    }

    if (!observerExists) {
      observers.push(fn);
    }

    if (angular.isDefined(scope)) {
      scope.$on('$destroy', function (a) {
        observerService.deregisterObserver(fn);
      });
    }
  };

  observerService.deregisterObserver = function (fn) {
    var ret = false;
    var currentIndex = 0;
    var observersLength = observers.length;

    for (currentIndex; currentIndex < observersLength; currentIndex++) {
      if (observers[currentIndex] === fn) {
        observers.splice(currentIndex, 1);
        ret = true;
        break;
      }
    }

    return ret;
  };

  observerService.notifyObservers = function () {
    angular.forEach(observers, function (observer) {
      observer();
    });
  };
};