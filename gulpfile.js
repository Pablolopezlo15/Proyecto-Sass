// Importa Gulp y los complementos necesarios
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

function compileSass() {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('subir/css'));
}

function minifyCss() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('subir/css'));
}

function minifyHtml() {
    return gulp.src('*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('subir'));
}

function moveHtml() {
    return gulp.src('*.html')
        .pipe(gulp.dest('subir'));
}

function moveAssets() {
    return gulp.src('assets/**/*')
        .pipe(gulp.dest('subir/assets'));
}

exports.compileSass = compileSass; 
exports.minifyCss = minifyCss;
exports.minifyHtml = minifyHtml;
exports.moveHtml = moveHtml;
exports.moveAssets = moveAssets;
exports.build = gulp.series(compileSass, minifyHtml, minifyCss, moveHtml, moveAssets);