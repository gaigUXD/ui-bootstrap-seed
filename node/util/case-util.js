'use strict';

module.exports = {
  toTitleCase: function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },

  toCamelCase: function (str) {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  },

  toSpaceCase: function (str) {
    return str.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, '$1');
  },

  toDashCase: function (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  },

  capitalize: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};