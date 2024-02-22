// Importa Gulp y los complementos necesarios
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');


function minifyCss() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

function minifyHtml() {
    return gulp.src('*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
}

function moveHtml() {
    return gulp.src('*.html')
        .pipe(gulp.dest('dist'));
}

exports.minifyCss = minifyCss;
exports.minifyHtml = minifyHtml;
exports.moveHtml = moveHtml;
exports.build = gulp.series(minifyHtml, moveHtml);
