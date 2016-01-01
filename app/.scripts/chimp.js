#!/usr/bin/env node
var path = require('path'),
  fs = require('fs'),
  extend = require('util')._extend,
  exec = require('child_process').exec;

var appOptions = {
  settings: 'settings.json',
  port: 3000,
  env: {
    ROOT_URL: 'http://localhost:3000/',
    VELOCITY: 0,
    JASMINE_CLIENT_UNIT: 1,
    JASMINE_CLIENT_INTEGRATION: 0
  }
};

var mirrorOptions = {
  settings: appOptions.settings,
  port: 3100,
  env: {
    MONGO_URL: 'mongodb://localhost:27017/chimp_db',
    ROOT_URL: 'http://localhost:3100/'
  },
  logFile: './chimp-mirror.log'
};

var chimpSwitches =
   ' --path=features';
   
if (!process.env.CI &&
   !process.env.CI_BRANCH &&
   !process.env.CIRCLE_BRANCH &&
   !process.env.TRAVIS_BRANCH) {
  chimpSwitches += ' --watch'; // when not in Watch mode, Chimp existing will exit Meteor too
}

// set this flat to start with a mirror.
if (process.env.WITHOUT_MIRROR) {
  chimpNoMirror();
} else if (process.env.NO_METEOR) {
  startChimp('--ddp=' + appOptions.env.ROOT_URL + chimpSwitches);
} else {
  chimpWithMirror();
}

// *************************************************

function chimpWithMirror() {
  console.log("Starting app with mirror");
  appOptions.waitForMessage = 'Started MongoDB';
  startApp(function () {
    console.log("App started, starting mirror");
    startMirror(function () {
      console.log('=> Test App running at:', mirrorOptions.env.ROOT_URL);
      console.log('=> Log file: tail -f', path.resolve(mirrorOptions.logFile), '\n');
      startChimp('--ddp=' + mirrorOptions.env.ROOT_URL + chimpSwitches
      )
    });
  });
}

function chimpNoMirror() {
  appOptions.waitForMessage = 'App running at';
  startApp(function () {
    startChimp('--ddp=' + appOptions.env.ROOT_URL + chimpSwitches
    );
  });
}

function startApp(callback) {
  startProcess({
    name: 'Meteor App',
    command: 'meteor --settings ' + appOptions.settings + ' --port ' + appOptions.port,
    waitForMessage: appOptions.waitForMessage,
    options: {
      env: extend(appOptions.env, process.env)
    }
  }, callback);
}

function startMirror(callback) {
  startProcess({
    name: 'Meteor Mirror',
    command: 'meteor --settings ' + mirrorOptions.settings + ' --port ' + mirrorOptions.port,
    // silent: true,
    logFile: mirrorOptions.logFile,
    waitForMessage: 'App running at',
    options: {
      env: extend(mirrorOptions.env, process.env)
    }
  }, callback);
}

function startChimp(command) {
  startProcess({
    name: 'Chimp',
    command: path.resolve(__dirname, '../node_modules/.bin/chimp') + ' ' + command
  });
}

function startProcess(opts, callback) {
  var proc = exec(
     opts.command,
     opts.options
  );
  if (opts.waitForMessage) {
    proc.stdout.on('data', function waitForMessage(data) {
      if (data.toString().match(opts.waitForMessage)) {
        if (callback) {
          callback();
        }
      }
    });
  }
  if (!opts.silent) {
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
  }
  if (opts.logFile) {
    var logStream = fs.createWriteStream(opts.logFile, {flags: 'a'});
    proc.stdout.pipe(logStream);
    proc.stderr.pipe(logStream);
  }
  proc.on('close', function (code) {
    console.log(opts.name, 'exited with code ' + code);
    process.exit(code);
  });
}
