var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cookieParser());

var apiRouter = express.Router();

app.use('/api', apiRouter);
app.listen(1337);

module.exports = {
  apiRouter: apiRouter,
  app: app
};