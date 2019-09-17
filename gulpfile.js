  
  var gulp = require ('gulp'),
  watch = require ('gulp-watch'),
  sass = require ('gulp-sass'),
  browserSync = require('browser-sync');
  
  gulp.task('server',['sass'], function () {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('src/css/sass/**/*.scss',['sass']).on('change', browserSync.reload);
    // gulp.watch('js/*.js').on('change', browserSync.reload);
    gulp.watch('src/index.html').on('change', browserSync.reload);
});

gulp.task('sass',function(){
    return gulp.src('src/css/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("src/css/"))
    .pipe(browserSync.stream());
});