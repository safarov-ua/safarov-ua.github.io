var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/sass/main.scss')
		.pipe(sass())
		.pipe(autoprefixer(['last 5 versions']))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync',function(){
	browserSync({
		server:{ 
			baseDir: 'app',
		},
		notify: false,
	});
});

gulp.task('img',function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
})

gulp.task('watch',['browserSync','sass'], function(){
	gulp.watch('app/sass/main.scss',['sass']);
	gulp.watch('app/index.html', browserSync.reload);
	gulp.watch('app/js/common.js', browserSync.reload)
});

gulp.task("clean",function(){
	return del.sync('dist');
});

gulp.task("build",['clean','img','sass'],function(){
	var buildCss = gulp.src('app/css/*.css')
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
});