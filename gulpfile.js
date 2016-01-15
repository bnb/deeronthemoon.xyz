var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var del = require('del');

// Upload to gh-pages branch
gulp.task('send', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

//Remove everything from the build/ folder.
gulp.task('clean', function() {
  return del('./build/**/*');
});

// Remove images from the build/ folder.
gulp.task('clean-img', function() {
  return del(['./build/images/*.jpg', './build/images/*.JPG', './build/images/*.gif', './build/images/*.GIF', './build/images/*.png', './build/images/*.PNG', './build/images/*.psd', './build/images/*.PSD'])
})

// Remove HTML from the build/images/ folder
gulp.task('clean-html', function(){
  return del('./build/images/*.html')
});

// Send stuff to gh-pages and clean image html files.
gulp.task('deploy', ['clean-html', 'send']);
