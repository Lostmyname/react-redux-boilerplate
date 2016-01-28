var gulp = require('gulp');
var nodemon = require('nodemon');
var browserSync = require('browser-sync').create();
var getTask = require('lmn-gulp-tasks');
var path = require('path');
var findModulesDown = require('find-node-modules-down');
var argv = require('yargs').argv;

var buildPath = 'public/assets';

function resolvePath(filename) {
	return path.join('assets/images', filename);
}

var jsOpts = {
	src: './src/js/script.js',
	dest: path.join(buildPath, 'js/bundle.js'),
	react: true,
	resolvePath: resolvePath
};
var jsOptsWatch = Object.assign({}, jsOpts, { watch: true });

var jsReactClientOpts = {
	src: './src/react/client.js',
	dest: path.join(buildPath, 'js/client.js'),
	react: true,
	jquery: false,
	resolvePath: resolvePath
};
var jsReactClientOptsWatch = Object.assign({}, jsReactClientOpts, {
	watch: true, hotModuleReloading: true
});

gulp.task('js', getTask('browserify', jsOpts));
gulp.task('js-react-client', getTask('browserify', jsReactClientOpts));

gulp.task('js-watch', getTask('browserify', jsOptsWatch));
gulp.task('js-watch-react-client', getTask('browserify', jsReactClientOptsWatch));


gulp.task('scss', getTask('scss', {
	src: './src/scss/styles-react.scss',
	dest: path.join(buildPath, 'stylesheets'),
	imagePath: '/assets/images',
	includePaths: findModulesDown()
}));

gulp.task('js-quality', getTask('js-quality', {
	src: ['./src/**/*.js', '!./src/**/*.min.js', 'gulpfile.js']
}));

gulp.task('watchers', gulp.series('js-watch', 'js-watch-react-client', function () {
	gulp.watch('./src/**/*.{sass,scss}', gulp.series('scss'));

	if (argv.nodemon !== false) {
		nodemon('--watch index.js index.js --port 4050 --silentStartup')
				.on('start', console.log.bind(console, 'Started!'))
				.on('quit', console.log.bind(console, 'App has quit, press cmd+c to exit gulp'))
				.on('restart', function () {
					console.log('App restarting due to change');
				});
	}

	var files = [
		path.join(buildPath, 'stylesheets/*.css'),
		'src/images/**/*.{png,jpg,gif,svg}',
		path.join(buildPath, 'index.html')
	];

	browserSync.init(files, {
		proxy: 'localhost:' + (argv.browserSyncPort || 4050)
	});
}));

gulp.task('lint', gulp.series('js-quality'));
gulp.task('build', gulp.parallel('js', 'js-react-client', 'scss'));
gulp.task('default', gulp.series('lint', 'build', 'watchers'));
