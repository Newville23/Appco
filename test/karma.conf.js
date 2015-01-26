// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-11-24 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
   files: [

      '../AH/bower_components/jquery/dist/jquery.js',
    '../AH/bower_components/angular/angular.js',
    '../AH/bower_components/bootstrap/dist/js/bootstrap.js',
    '../AH/bower_components/angular-animate/angular-animate.js',
    '../AH/bower_components/angular-cookies/angular-cookies.js',
    '../AH/bower_components/angular-resource/angular-resource.js',
    '../AH/bower_components/angular-route/angular-route.js',
    '../AH/bower_components/angular-sanitize/angular-sanitize.js',
    '../AH/bower_components/angular-touch/angular-touch.js',
    '../AH/bower_components/angular-aria/angular-aria.js',
    '../AH/bower_components/hammerjs/hammer.js',
    '../AH/bower_components/angular-material/angular-material.js',
    '../AH/bower_components/firebase/firebase.js',
    '../AH/bower_components/angularfire/dist/angularfire.js',
     '../AH/bower_components/material-design-icons/sprites/css-sprite/sprite-navigation-white.css',
    '../AH/bower_components/material-design-icons/sprites/css-sprite/sprite-editor-white.css',
    '../AH/bower_components/material-design-icons/sprites/css-sprite/sprite-content-white.css',

      '../AH/app/scripts/*.js',
      '../AH/app/scripts/**/*.js'
],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
