const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const del = require("del");
const htmlmin = require('gulp-htmlmin');
const webp = require('gulp-webp');
var imagemin = require('gulp-imagemin');
var imageminJpegtran = require('imagemin-Jpegtran');
const { init } = require('browser-sync');
const server =require('browser-sync').create();

gulp.task('css', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest("./build/css"))
    .pipe(server.stream())
})

gulp.task('html', () => {  //копирует и переносит хтмл
  return gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('./build'))
  .pipe(server.stream())
})

gulp.task('copy', () => { //копирует и переносит вофы и картинки
  return gulp.src([
    './src/fonts/**/*.{woff,woff2}',
    './src/images/**'
  ]).pipe (gulp.dest('./build'))
})

gulp.task('clear', function () {  //удаляет старую папку билд
  return del("build");
});

gulp.task("images", function() {
  return gulp
  .src("./build/**/*.{png, jpeg, jpg, svg, avif}")
  .pipe(imagemin([
    imagemin.optipng({ optimizationLevel: 3 }), //optimized
    imagemin.svgo({ plugins: [{ cleanupIDs: false }] }), //optimized svg
    imageminJpegtran({ progressive: true }) ])  //progr.jpeg
  )
  .pipe(gulp.dest("./build/img"));
});

gulp.task('server', () => {
  server.init({
    server: "build",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('./src/scss/**/*.scss', gulp.series('css'));
  gulp.watch('./src/*.html', gulp.series('html'));

})

gulp.task("build-resources", gulp.series('clear', 'copy', 'css', 'html'))

gulp.task("start", gulp.series('build-resources', 'server'))
gulp.task("build", gulp.series('clear', 'copy'))

