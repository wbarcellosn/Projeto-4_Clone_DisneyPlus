const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function scripts() {
    return gulp.src('./src/scripts/*.js') //Arquivos fontes
    .pipe(uglify()) //Minificação
    .pipe(gulp.dest('./dist/js')); //Pasta destino
}

function styles() {
    return gulp.src('./src/styles/*.scss') //Arquivos fontes
    .pipe(sass({outputStyle: 'compressed'})) //Minificação
    .pipe(gulp.dest('./dist/css')); //Pasta destino
}

function images() {
    return gulp.src('./src/images/**/*') //Arquivos fontes
    .pipe(imagemin()) //Minificação
    .pipe(gulp.dest('./dist/images')); //Pasta destino
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.scss', gulp.parallel(scripts))
}
