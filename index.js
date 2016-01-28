var express = require('express');
var url = require('url');
var argv = require('yargs').argv;

var app = express();

app.use(express.static('public'));
app.use('/assets/images', express.static('src/images'));

var server = app.listen(argv.port || 0, function () {
	var serverAddress = server.address();

	var address = url.format({
		protocol: 'http',
		hostname: serverAddress.address,
		port: serverAddress.port
	});

	if (argv.silentStartup !== true) {
		console.log('Express listening on %s (btw you can cmd+click)', address);
	}
});


// Mock your API requests below:

app.get('/api', function (req, res) {
	res.send({
		foo: 'bar',
		random: Math.random().toString(16).slice(2)
	});
});
