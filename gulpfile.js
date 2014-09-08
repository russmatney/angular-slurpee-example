var slurpee = require('slurpee');

slurpee.config.cssFile = 'app.css';
slurpee.config.indexFile = 'index.html';
slurpee.config.jsFile = 'scripts/controller.js';
slurpee.config.jsPaths = ['scripts/*.js'];
slurpee.config.jsRootPath = './js';
slurpee.config.liveReloadPort = 35729;
slurpee.config.outputDir = './';
slurpee.config.staticPath = undefined;
slurpee.config.staticPort = 3000;
slurpee.config.useBower = false;

slurpee.configure();

var gulp = require('gulp');

gulp.task('default', ['build', 'watch']);
