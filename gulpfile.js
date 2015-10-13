var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    package = require('./package.json'),
    prefix = require('gulp-autoprefixer');


/** Copy vendor HTML to dist **/
gulp.task('copyhtml', function() {
   gulp.src('./build/index.html')
   .pipe(rename('index2.html'))
   .pipe(gulp.dest('./build/'));
})

/** Minify vendor less and css and copy to build **/
.task('minify_copy_vendor_styles', function() {
  return gulp.src('app/less/vendor.less')
    .pipe(less())
    .pipe(prefix({
        cascade: true
    }))
    .pipe(minifyCSS())
    .pipe(rename('guthix.vendor.min.' + package.version + '.css'))
    .pipe(gulp.dest('build/css/'));
})

/** Copy bootstrap and font awesome fonts to build **/
.task('copy_fonts', ['minify_copy_vendor_styles'], function() {
    return gulp.src(['./app/fonts/**.*'])
        .pipe(gulp.dest('./build/fonts/'));
})

/** Copy bootstrap and font awesome fonts to build **/
// .task('copy_css', function() {
//     return gulp.src(['./app/css/**/**.*'])
//         .pipe(gulp.dest('./build/css/'));
// })

/**
 * Compiling resources and serving application
 */
 .task('default', ['minify_copy_vendor_styles', 'copy_fonts'], function() {
    return "";
});
