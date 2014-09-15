'use strict';

var fs = require('fs');
var ensureExists = require('../../util/ensure-exists');
var caseUtil = require('../../util/case-util');
var newFileFromScaffold = require('./new-file-from-scaffold');
var constants = require('./cli-constants');
var reporter = require('./cli-reporter');
var config = require('../../gulp-config');

module.exports = function newModule(params, flags) {
  var moduleName = caseUtil.toCamelCase(params.shift());
  console.log("module name", moduleName);
  var modulePath = config.paths.src.modules + '/' + caseUtil.toDashCase(moduleName);
  var controllersPath = modulePath + '/controllers';
  var imagesPath = modulePath + '/images';
  var lessPath = modulePath + '/less';
  var servicesPath = modulePath + '/services';
  var templatesPath = modulePath + '/templates';
  var generateRoute = (flags.indexOf(constants.flags.generateRoute) > -1) ? true : false;
  var replacements = [
    {
      pattern: /\$\{moduleName\}/g,
      replacement: moduleName
    },
    {
      pattern: /\$\{controllerName\}/g,
      replacement: caseUtil.capitalize(moduleName) + 'Ctrl'
    },
    {
      pattern: /\$\{controllerFile\}/g,
      replacement: caseUtil.toDashCase(moduleName) + '.controller'
    },
    {
      pattern: /\$\{moduleTitleCase\}/g,
      replacement: caseUtil.toTitleCase(caseUtil.toSpaceCase(moduleName))
    },
    {
      pattern: /\$\{moduleDashCase\}/g,
      replacement: caseUtil.toDashCase(moduleName)
    }
  ];

  ensureExists(modulePath, function(err) {
    if (err === constants.folderExists) {
      reporter.warn('module `' + modulePath + '` already exists. Aborting...');
    } else {

      if (generateRoute) {
        newFileFromScaffold(modulePath, moduleName + '.js', 'module-with-route.scaffold', replacements);
        newFileFromScaffold(templatesPath, moduleName + '.tpl', 'template.scaffold', replacements);
      } else {
        newFileFromScaffold(modulePath, moduleName + '.js', 'module.scaffold', replacements);
      }

      newFileFromScaffold(controllersPath, moduleName + '.controller.js', 'controller.scaffold',
        replacements);

      reporter.anon('New module `' + modulePath + '` created.');
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