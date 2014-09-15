'use strict';

var fs = require('fs');
var constants = require('./cli-constants');
var reporter = require('./cli-reporter');
var config = require('../../gulp-config');

module.exports = function newFile(path, name, scaffold, replacements) {
  var i;
  var replacementsLength;
  var scaffoldPath = config.paths.node + '/cli/scaffolds/' + scaffold + '.js';

  fs.readFile(scaffoldPath, 'utf8', function(err, scaffoldContents) {
    if (replacements) {
      replacementsLength = replacements.length;

      for (i = 0; i < replacementsLength; i++) {
        scaffoldContents = scaffoldContents.replace(replacements[i].pattern,
          replacements[i].replacement);
      }
    }

    fs.writeFile(path + '/' + name, scaffoldContents, function(err) {
      if (err) {
        reporter.error(err);
      } else {
        reporter.anon('New file `' + path + '/' + name + '` created')
      }
    });
  });
};