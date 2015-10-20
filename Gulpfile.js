var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('merge', function () {
  return gulp.src(['./examples/example.md'])
  .pipe(concat('./gtor.md'))
  .pipe(gulp.dest('./examples/'));
});
