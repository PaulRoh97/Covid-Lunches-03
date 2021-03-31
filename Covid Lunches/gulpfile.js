"use strict";

// Load Plugins
const autoprefixer = require('gulp-autoprefixer');
const beautify = require('gulp-beautify');
const browserSync = require("browser-sync").create();
const del = require('del');
const gulp = require('gulp');
const mergeStream = require('merge-stream');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass');
const inject = require('gulp-inject-string');
const dependencies = require('./dependencies.json');

/**
 * Set the destination/production directory
 * This is where the project is compiled and exported for production.
 * This folder is auto created and managed by gulp. 
 * Do not add/edit/save any files or folders iside this folder. They will be deleted by the gulp tasks.
*/
const distDir = './dist/';

// Clean up the dist folder before running any task
function clean() {
  return del(distDir + '**/*');
}

// Task: Copy Files
function copyFiles() {
  const assetsFolder = gulp.src(['./src/assets/**/*', '!./src/assets/js/main.js'])
    .pipe(gulp.dest(distDir+'assets/'))
    .pipe(browserSync.stream());

  const formsFolder = gulp.src('./src/forms/**/*')
  .pipe(gulp.dest(distDir+'forms/'));

  return mergeStream(assetsFolder, formsFolder);
}

// Task: Compile HTML
function compileHTML() {

  var css_links ='';
  var js_links = '';
  for (let dependency in dependencies) {
    if(dependencies[dependency].css_link !== undefined) {
      css_links += '<link href="' + dependencies[dependency].css_link + '" rel="stylesheet">';
    }
    if(dependencies[dependency].js_link !== undefined) {
      js_links += '<script src="' + dependencies[dependency].js_link + '"></script>';
    }
  }

  return gulp.src(['./src/*.html', '!./src/template.html'])
    .pipe(nunjucks.compile())
    .pipe( inject.replace('<!-- Vendor CSS Files -->', '<!-- Vendor CSS Files -->' + css_links) )
    .pipe( inject.replace('<!-- Vendor JS Files -->', '<!-- Vendor JS Files -->' + js_links) )
    .pipe(beautify.html({ indent_size: 2, max_preserve_newlines: 1}))
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream());
}

// Task: Compile SCSS
function compileSCSS() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(distDir+'assets/css'))
    .pipe(browserSync.stream());
}

// Task: Compile JS
function compileJS() {
  return gulp.src( './src/assets/js/main.js')
    .pipe(beautify.js({ indent_size: 2, max_preserve_newlines: 2}))
    .pipe(gulp.dest(distDir+'assets/js'))
    .pipe(browserSync.stream());
}

// Task: Copy Dependencies
function copyDependencies() {
  var stream = mergeStream();

  for (let dependency in dependencies) {
    if(dependencies[dependency].src) {
      stream.add( gulp.src( dependencies[dependency].src ).pipe( gulp.dest( distDir + dependencies[dependency].dest ) ) );
    } else if(dependencies[dependency].srcs) { 
      for (let multidependency in dependencies[dependency].srcs) {
        stream.add( gulp.src( dependencies[dependency].srcs[multidependency].src ).pipe( gulp.dest( distDir + dependencies[dependency].srcs[multidependency].dest ) ) );
      }
    }
  }
  return stream;
}

// Init live server browser sync
function initBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: distDir
    },
    port: 3000,
    notify: false
  });
  done();
}

// Watch files
function watchFiles() {
  gulp.watch('./src/scss/**/*', compileSCSS);
  gulp.watch('./src/**/*.html', compileHTML);
  gulp.watch(['./src/assets/**/*', '!./src/assets/js/main.js'], copyFiles);
  gulp.watch('./src/assets/js/main.js', compileJS);
}

// Export tasks
const dist = gulp.series(clean, gulp.parallel(copyFiles, compileHTML, compileSCSS, compileJS, copyDependencies) );

exports.watch = gulp.series(dist, watchFiles);
exports.start = gulp.series(dist, gulp.parallel(watchFiles, initBrowserSync) );
exports.default = dist;
