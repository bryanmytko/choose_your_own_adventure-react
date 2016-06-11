var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    babel = require('babelify');

gulp.task('scripts', function () {
  gulp.src(['./app/app.js'])
    .pipe(browserify({
      debug: true,
      transform: ['babelify', 'reactify']
    }))
    .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['scripts']);
