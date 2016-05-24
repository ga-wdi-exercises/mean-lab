var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');


// HTML ENDPOINTS
app.get('/', function homepage(req,res) {
	res.sendFile(__dirname + '/views/index.html');
});


// JSON ENDPOINTS
app.get ('/api', controllers.api.index);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// REDIRECT ALL OTHER PATHS TO INDEX
app.get('*', function homepage(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});


// SERVER
app.listen(process.env.PORT || 1337, function () {
	console.log('server running on http://localhost:1337/');
});