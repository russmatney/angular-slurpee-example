var slurpee = require('slurpee');

slurpee.config.cssFile = 'app.css';
slurpee.config.indexFile = 'index.html';
slurpee.config.jsFile = 'app.js';
slurpee.config.jsPaths = ['scripts/*.js'];
slurpee.config.jsRootPath = './js';
slurpee.config.liveReloadPort = 35729;
slurpee.config.outputDir = 'public/';
slurpee.config.staticDir = 'public';
slurpee.config.staticPort = 3000;
slurpee.config.useBower = true;

slurpee.configure();

var gulp = require('gulp');

gulp.task('default', ['build', 'serve', 'watch']);
