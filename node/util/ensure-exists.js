'use strict';

var fs = require('fs');
var constants = require('../cli/lib/cli-constants');

module.exports = function ensureExists(path, mask, cb) {
  if (typeof mask == 'function') { // allow the `mask` parameter to be optional
    cb = mask;
    mask = 484;
  }
  fs.mkdir(path, mask, function (err) {
    if (err) {
      if (err.code == 'EEXIST') cb(constants.folderExists); // folder already exists
      else cb(err); // something else went wrong
    } else cb(null); // successfully created folder
  });
};