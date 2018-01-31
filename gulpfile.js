const Gulp = require('gulp');
const Sass = require('gulp-sass');
const PostCSS = require('gulp-postcss');
const CSSNext = require('postcss-cssnext');
const CleanCSS = require('gulp-clean-css');
const Concat = require('gulp-concat');
const Uglify = require('gulp-uglify');
const BrowserSync = require('browser-sync').create();

Gulp.task('sass', () => Gulp.src([
  // Example to add CSS dependencies from npm (after doing `npm install bootstrap`):
  // (to get the /dist/... path, just look into the corresponding "node_modules" folder)
  require.resolve('bootstrap/dist/css/bootstrap.min.css'), 
  require.resolve('fullpage.js/dist/jquery.fullpage.min.css'), 
  './scss/**/*.scss'

])
  .pipe(Sass().on('error', Sass.logError))
  .pipe(PostCSS([ CSSNext() ]))
  .pipe(Concat('style.css'))
  .pipe(CleanCSS({ compatibility: 'ie10' }))
  .pipe(Gulp.dest('./public'))
  .pipe(BrowserSync.stream())
);

Gulp.task('js', () => Gulp.src([
  // Example to add dependencies from npm (after doing `npm install jquery` and `npm install bootstrap`):
  // (to get the /dist/... path, just look into the corresponding "node_modules" folder)
  require.resolve('jquery/dist/jquery.slim.min'),
  require.resolve('bootstrap/dist/js/bootstrap'),
  require.resolve('fullpage.js/dist/jquery.fullpage.min'),
  require.resolve('scrollreveal/dist/scrollreveal.min'), 
  './js/**/*.js',
])
  .pipe(Concat('bundle.js'))
  .pipe(Uglify())
  .pipe(Gulp.dest('./public'))
  .pipe(BrowserSync.stream())
);

Gulp.task('browser-sync', () => BrowserSync.init({
  server: { baseDir: 'public' }
}));

Gulp.task('noop', () => undefined);

Gulp.task('default', ['js', 'sass', 'browser-sync'], () => {
  Gulp.watch('./scss/**/*.scss', ['sass']).on('change', BrowserSync.reload);
  Gulp.watch('./public/**/*.html', ['noop']).on('change', BrowserSync.reload);
  Gulp.watch('./js/**/*.js', ['js']);
});
