const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') //Arquivos fontes
    .pipe(sass({outputStyle: 'compressed'})) //Minificação
    .pipe(gulp.dest('./dist/css')); //Pasta destino
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
