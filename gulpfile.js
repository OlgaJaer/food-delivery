let { src, dest, task, series, watch } = require('gulp'),
  sync = require('browser-sync').create(),
  scss = require('gulp-sass')(require('sass')),
  rename = require('gulp-rename'),
  cleanCss = require('gulp-clean-css'),
  webp = require('gulp-webp'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer')
del = require('del')

function html() {
  return src('./src/*.html').pipe(dest('./dist'))
}

function css() {
  return src('./src/css/*.css').pipe(dest('./dist'))
}

function imagesWebp() {
  return src('./src/img/**/*').pipe(webp()).pipe(dest('./dist/img'))
}

function images() {
  return src('./src/img/**/*').pipe(dest('./dist/img'))
}

function js() {
  return src('./src/js/*').pipe(dest('./dist/js'))
}

function compileScss() {
  return (
    src('./src/scss/style.scss')
      .pipe(sourcemaps.init())
      .pipe(scss())
      // .pipe(cleanCss())
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(rename('style.min.css'))
      .pipe(sourcemaps.write('../maps/'))
      .pipe(dest('./dist/css'))
  )
}
function clear() {
  return del('dist')
}

task('html', html)

//gulp.task('critical', criticalCSS);
task('images', images)
task('webp', imagesWebp)
task('js', js)

function serve() {
  sync.init({
    server: './dist',
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**.scss', series(compileScss)).on('change', sync.reload)
  watch('src/js/**.js', series(js)).on('change', sync.reload)
}

exports.build = series(clear, images, compileScss, html, js)
exports.serve = series(clear, images, js, compileScss, html, serve)
exports.clear = clear
