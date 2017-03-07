/**
 * Module Dependencies
 */

'use strict';

var gulp = require('gulp');
var KarmaServer = require('karma').Server;
const mocha = require('gulp-mocha');

/**
 * Run karma test once and exit
 */
gulp.task('testKarma', (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('karma', (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

/**
 * Run mocha tests
 */
gulp.task('mocha', (cb) => 
  gulp.src(['specs/server/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .once('error', () => {
        process.exit(1);
    })
    .once('end', () => {
        process.exit();
    })
);


gulp.task('tdd', ['mocha', 'testKarma'])