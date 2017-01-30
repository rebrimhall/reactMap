const PATH = require('path');

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./build_tools/build', {recurse: false});

gulp.task('default', ['build:watch:app', 'server']);