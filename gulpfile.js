const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync");


function style() {
    return gulp.src('./page3/**/*.scss').pipe(sass()).pipe(gulp.dest('./page3/css')).pipe(browserSync.stream())
}
function watch() {
    browserSync.init({
        server: {
            baseDir: './page3/'
        }
    })
    gulp.watch('./page3/**/*.scss', style)
    gulp.watch('./page3/*.html').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch