var gulp = require('gulp'),
    connect = require('gulp-connect');

var slurpee = require('slurpee');

slurpee.configure = {
  cssFile: 'app.css',
  indexFile: 'index.html',
  jsFile: 'scripts/app.js',
  jsPaths: ['scripts/*.js'],
  jsRootPath: './js',
  liveReloadPort: 35729,
  outputDir: 'public/',
  staticPath: undefined,
  staticPort: 3000,
  useBower: true
}

var paths = {
  views: ['./*.html'],
  scripts: ['./*/**.js']
};

gulp.task('connect', function() {
  connect.server({
    app:[__dirname],
    port: 3000,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src(paths.views)
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(paths.views, ['html']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['connect', 'scripts', 'html', 'watch']);
