var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    babel = require('babelify');

gulp.task('scripts', function () {
  gulp.src(['./app/components/**.*'])
    .pipe(browserify({
      debug: true,
      transform: ['babelify', 'reactify']
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('styles',function() {
  gulp.src('css/fonts/**.*')
    .pipe(gulp.dest('build/css/fonts'))

    gulp.src('css/**.*')
      .pipe(gulp.dest('build/css/'))
});

gulp.task('default', ['scripts']);
