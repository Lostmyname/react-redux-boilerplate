var express = require('express');
var url = require('url');
var nunjucks = require('nunjucks');
var argv = require('yargs').argv;
var data = require('./data.json');

var app = express();

app.use(express.static('public'));

app.get('/challenge/:id', function (req, res) {
	var testData = data.challenges[(req.params.id) - 1];

	res.render('challenge.tmpl.html', {
		number: testData.number,
		description: testData.description,
		json: JSON.stringify(testData.cases)
	});
});


nunjucks.configure('views', {
	express: app
});

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