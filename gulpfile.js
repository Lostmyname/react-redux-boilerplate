var gulp = require('gulp');
var nodemon = require('nodemon');
var browserSync = require('browser-sync').create();
var getTask = require('lmn-gulp-tasks');
var path = require('path');
var findModulesDown = require('find-node-modules-down');
var argv = require('yargs').argv;

var buildPath = 'public/assets';


var jsOpts = {
	src: './src/js/app.js',
	dest: path.join(buildPath, 'js/app.js'),
	react: true,
	jquery: false
};
var jsOptsWatch = Object.assign({}, jsOpts, {
	watch: true, hotModuleReloading: true
});

gulp.task('js', getTask('browserify', jsOpts));
gulp.task('js-watch', getTask('browserify', jsOptsWatch));


gulp.task('scss', getTask('scss', {
	src: './src/scss/styles.scss',
	dest: path.join(buildPath, 'stylesheets'),
	imagePath: '/assets/images',
	includePaths: findModulesDown()
}));

gulp.task('js-quality', getTask('js-quality', {
	src: ['./src/**/*.js', '!./src/**/*.min.js', 'gulpfile.js']
}));

gulp.task('watchers', gulp.series('js-watch', function () {
	gulp.watch('./src/**/*.{sass,scss}', gulp.series('scss'));

	if (argv.nodemon !== false) {
		nodemon('--watch index.js --watch data.json index.js --port 4050 --silentStartup')
				.on('start', console.log.bind(console, 'Started!'))
				.on('quit', console.log.bind(console, 'App has quit, press cmd+c to exit gulp'))
				.on('restart', function () {
					console.log('App restarting due to change');
				});
	}

	var files = [
		path.join(buildPath, 'stylesheets/*.css'),
		path.join(buildPath, 'index.html')
	];

	browserSync.init(files, {
		proxy: 'localhost:' + (argv.browserSyncPort || 4050)
	});
}));

gulp.task('lint', gulp.series('js-quality'));
gulp.task('build', gulp.parallel('js', 'scss'));
gulp.task('default', gulp.series('lint', 'build', 'watchers'));
