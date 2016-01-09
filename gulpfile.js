var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var del = require('del');

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('clean', function() {
  return del('./build/**/*');
});
