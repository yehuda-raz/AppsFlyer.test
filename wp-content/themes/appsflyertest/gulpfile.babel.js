
// Gulp Compile

//  Watch compile
//   Run 'gulp watchAll --prod' >  For pruduction 
//      Or
//      Run 'gulp watchAll' >  For Dev






import { src, dest, watch } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
const PRODUCTION = yargs.argv.prod;
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';

// for img
import imagemin from 'gulp-imagemin';




export const styles = () => {
    return src('src/scss/bundle.scss')
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
        .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie8' })))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest('dist/css'));
}


export const images = () => {
    return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(dest('dist/images'));
}


export const watchAll = () => {
    watch('src/scss/**/*.scss', styles);
    watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
}