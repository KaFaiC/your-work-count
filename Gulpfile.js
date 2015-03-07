var gulp        = require('gulp'),
		sass        = require('gulp-sass'),
		minifycss   = require('gulp-minify-css'),
		rename      = require('gulp-rename'),
		browserSync = require('browser-sync'),
		package     = require('./package.json');

var paths = {
	  sass: ['./public/css/**/*.scss']
};

var reload = browserSync.reload;

gulp.task('sass', function() {
	return gulp.src('./public/css/style.scss')
		.pipe(sass({ style: 'expanded' }))
 		.pipe(gulp.dest('./public/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./public/css'))
		.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
//		server: {
//			baseDir: './'
//		},
		proxy: 'http://localhost:8080'
	});
});

gulp.task('watch', function() {
  gulp.watch([package.paths.sass, package.paths.js], ['sass', browserSync.reload]);
});

gulp.task('default', ['watch', 'browser-sync']);
