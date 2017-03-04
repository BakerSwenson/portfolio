var express = require('express'),
	jade = require('jade'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');


// Express 4 boilerplate

var app = express();
app.set('view engine', 'jade');

var logger = require('morgan');
var methodOverride = require('method-override');


app.use(logger('dev'));
app.use(cookieParser());

app.use('/public', express.static(__dirname + '/public'));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(methodOverride('_method'));

/*
  Routes
*/

app.use('/', function(req, res){
	res.render('index');
});

module.exports = app;
