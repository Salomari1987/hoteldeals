// Karma configuration
// Generated on Tue Mar 07 2017 22:40:05 GMT+0200 (EET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'client/lib/angular/angular.js',
      'client/lib/angular-ui-router/release/angular-ui-router.min.js',
      'client/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'client/lib/angular-mocks/angular-mocks.js',
      'client/app/**/*.js',
      'specs/client/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // Source files you want to generate coverage reports for
      // This should not include tests or libraries
      // These files will be instrumented by Istanbul
      'client/app/**/*.js': ['coverage'],
    },

    // Configure the reporter
    coverageReporter: {
      type: 'text',
      dir: 'results/coverage/'
    },
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 40000,

    specReporter: {
      maxLogLines: 10,         // limit number of lines logged per test 
      suppressErrorSummary: true,  // do not print error summary 
      suppressFailed: false,  // do not print information about failed tests 
      suppressPassed: false,  // do not print information about passed tests 
      suppressSkipped: true,  // do not print information about skipped tests 
      showSpecTiming: false // print the time elapsed for each spec 
    },

    // report which specs run too slow
    reportSlowerThan: 500,
    

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'progress', 'coverage'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // any additional plugins needed for testing
    plugins: [
      'karma-coverage',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ]
  })
}
