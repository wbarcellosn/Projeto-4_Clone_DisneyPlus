const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

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

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
