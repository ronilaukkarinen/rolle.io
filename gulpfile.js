var gulp = require('gulp'),
    compass = require('gulp-compass'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    header = require('gulp-header');
    util = require('gulp-util');
    livereload = require('gulp-livereload'),
    jade = require('gulp-jade');
    wrap = require('gulp-wrap-amd');
    currentDate = util.date(new Date(), 'dd-mm-yyyy');
    pkg = require('./package.json');
    banner = '/*! <%= pkg.name %> <%= currentDate %> - <%= pkg.author %> */\n';

gulp.task('templates', function() {
  gulp.src('./lib/*.jade')
    .pipe(jade({
      client: true
    }))
    .pipe(wrap({
      deps: ['jade'],
      params: ['jade']
    }))
    .pipe(gulp.dest('./dist/'))
});

// Compass without config.rb:

gulp.task('compass', function() {
  gulp.src('sass/layout.scss')
  .pipe(compass({
    css: 'css',
    sass: 'sass',
    image: 'img'
     // ,require: ['sassline']
      }))
  .on('error', function(err) {
    // Would like to catch the error here
      })
  .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
  .pipe(gulp.dest('css'))
  .pipe(livereload())
  .pipe(notify({ message: 'Compass complete' }));
    });

// If not using compass:

// gulp.task('styles', function() {
//   return gulp.src('content/themes/jentafon/sass/layout.scss')
//     .pipe(sass({ style: 'expanded', }))
//     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//     .pipe(gulp.dest('content/themes/jentafon/css'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(minifycss())
//     .pipe(gulp.dest('content/themes/jentafon/css'))
//     .pipe(notify({ message: 'Styles task complete' }));
    // });

gulp.task('scripts', function() {
  //gulp.src('content/themes/problemsolvin/js/*.js')
  gulp.src(
    [
    'js/jquery-1.9.0.min.js',
    'js/modernizr.min.js',
    'js/jquery.lifestream.min.js',
    'js/jquery.timeago.min.js',
    'js/jquery.smallipop.min.js',
    'js/scripts.min.js' 
    ])
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(uglify({preserveComments: false, compress: true, mangle: true}))
    .pipe(header(banner, {pkg: pkg, currentDate: currentDate}))
    .pipe(gulp.dest('js/'))
    .pipe(livereload())
    .pipe(notify({ message: 'scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('img/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(livereload())
    .pipe(gulp.dest('img/optimized'));
    });

// gulp.task('jade', function() {
//   gulp.src('*.jade')
//     .pipe(jade({
//       pretty: false,
//     }))
//     .pipe(wrap({
//       deps: ['jade'],
//       params: ['jade']
//     }))
//     .pipe(gulp.dest('./'))
//     .pipe(livereload())
//     .pipe(notify({ message: 'Jade to HTML task complete' }));
// });

gulp.task('watch', function() {

  livereload.listen();

  //gulp.watch('*.jade', ['jade']);
  gulp.watch('sass/*.scss', ['compass']);
  gulp.watch('js/scripts.js', ['scripts']);
  gulp.watch('content/themes/problemsolvin/images/*', ['images']);

});

gulp.task('default', function() { gulp.start('compass', 'images', 'scripts', 'jade'); });  