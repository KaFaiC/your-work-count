var gulp        = require('gulp'),
		sass        = require('gulp-ruby-sass'),
		minifycss   = require('gulp-minify-css'),
		rename      = require('gulp-rename'),
		browserSync = require('browser-sync'),
		package     = require('./package.json'),
		bower 			= require('gulp-bower'),
		filter      = require('gulp-filter');

var paths = {
	  sass: ['./public/sass/**/*.scss'],
		sassPath: '.public/sass',
		bowerDir: './bower_components'
};

var reload = browserSync.reload;
gulp.task('sass', function() {
	return gulp.src('./public/sass/style.scss')
		.pipe(sass({
	 		style: 'expanded',
		 	loadPath: [
				paths.sassPath,
				paths.bowerDir + '/bootstrap-sass-official/assets/stylesheets'
			]
		}))
 		.pipe(gulp.dest('./public/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./public/css'))
		.pipe(filter('**/*.css'))
		.pipe(reload({stream: true}));
});

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(paths.bowerDir))
});

gulp.task('browser-sync', function() {
	browserSync({
//		server: {
//			baseDir: './'
//		},
		proxy: 'http://localhost:8080',
		browser: "firefox"
	});
});

gulp.task('watch', function() {
  gulp.watch([package.paths.sass], ['sass']);
	gulp.watch(package.paths.js, browserSync.reload);
});

gulp.task('default', ['watch', 'browser-sync']);
