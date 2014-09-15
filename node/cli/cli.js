#! /usr/bin/env node

var newModule = require('./lib/new-module');
var newController = require('./lib/new-controller');

var command = process.argv.slice(2, 3)[0];
var args = process.argv.slice(3);
var commands = {
  module: 'module',
  controller: 'controller'
};

switch(command) {
  case commands.module:
    newModule.apply(this, args);
    break;

  case commands.controller:
    newController.apply(this, args);
  break;
}

