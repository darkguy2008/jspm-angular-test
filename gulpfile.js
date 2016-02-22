var gulp      = require('gulp');
var gulp_jspm = require('gulp-jspm'); 
var jspm      = require('gulp-jspm'); 
var sync      = require('run-sequence');
var rename    = require('gulp-rename');

var paths = {
  entry: 'src/app/app.js',
  app: ['src/*', 'src/app/*.{js,css,html}', 'src/styles/*.css'],
  toCopy: [ 'src/index.html', 'src/config.js', 'src/app/**', 'src/css/**', 'src/jspm_packages/**' ],
  dest: '../deploy',
};

gulp.task('build', [], function() {
  return gulp.src(paths.toCopy, { base: 'src' })
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['dev']);
});

gulp.task('dev', function(done) {
  sync('build', done)
});

gulp.task('default', function(done) {
  sync('build', 'watch', done)
});
