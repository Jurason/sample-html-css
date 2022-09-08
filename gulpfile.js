const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync");


function style() {
    return gulp.src('./page3/**/*.scss').pipe(sass()).pipe(gulp.dest('./page3/css'))
}

exports.style = style