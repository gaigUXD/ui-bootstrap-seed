#! /usr/bin/env node

var newModule = require('./lib/new-module');
var newController = require('./lib/new-controller');
var reporter = require('./lib/cli-reporter.js');

var args = processArgs();
var commands = {
  module: 'module',
  controller: 'controller'
};

switch(args.command) {
  case commands.module:
    newModule(args.params, args.flags);
    break;

  case commands.controller:
    newController.apply(this, args.params, args.flags);
  break;

  default:
    reporter.error("Invalid command");
}

function processArgs() {
  var command = process.argv.slice(2, 3)[0];
  var params = process.argv.splice(3);
  var flags = [];
  var i = params.length;
  var flagMatch = /--.*/;

  while (i--) {
    if (flagMatch.test(params[i])) {
      flags.push(params[i]);
      params.splice(i, 1);
    }
  }

  return {
    command: command,
    params: params,
    flags: flags
  };
}

