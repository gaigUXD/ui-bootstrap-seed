'use strict';

var fs = require('fs');
var ensureExists = require('../../util/ensure-exists');
var newFileFromScaffold = require('./new-file-from-scaffold');
var constants = require('./cli-constants');
var reporter = require('./cli-reporter');
var config = require('../../gulp-config');

module.exports = function newModule(moduleName) {
  // Directories
  var modulePath = config.paths.src.modules + '/' + moduleName;
  var controllersPath = modulePath + '/controllers';
  var imagesPath = modulePath + '/images';
  var lessPath = modulePath + '/less';
  var servicesPath = modulePath + '/services';
  var templatesPath = modulePath + '/templates';
  var replacements = [
    {
      pattern: /\$\{moduleName\}/g,
      replacement: moduleName
    },
    {
      pattern: /\$\{controllerName\}/g,
      replacement: moduleName + 'Ctrl'
    },
    {
      pattern: /\$\{controllerFile\}/g,
      replacement: moduleName + '.controller'
    }
  ];

  // Go
  ensureExists(modulePath, function(err) {
    if (err === constants.folderExists) {
      reporter.warn('module `' + modulePath + '` already exists. Aborting...');
    } else {
      reporter.anon('New module `' + modulePath + '` created');

      newFileFromScaffold(modulePath, moduleName + '.js', 'module.scaffold', replacements);
      newFileFromScaffold(controllersPath, moduleName + '.controller.js', 'controller.scaffold',
        replacements);
    }

    ensureExists(controllersPath, function(err) {
      if (!err) {
        reporter.anon('New folder `' + controllersPath + '` created');
      }
    });
    ensureExists(imagesPath, function(err) {
      if (!err) {
        reporter.anon('New folder `' + imagesPath + '` created');
      }
    });
    ensureExists(lessPath, function(err) {
      if (!err) {
        reporter.anon('New folder `' + lessPath + '` created');
      }
    });
    ensureExists(servicesPath, function(err) {
      if (!err) {
        reporter.anon('New folder `' + servicesPath + '` created');
      }
    });
    ensureExists(templatesPath, function(err) {
      if (!err) {
        reporter.anon('New folder `' + templatesPath + '` created');
      }
    });
  });
};