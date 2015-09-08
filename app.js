var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = {
	"books": [
		{
			"title": "backbone",
			"author": "omer",
			"releaseDate": "10-10-1991",
			"keywords": "omer,backbone"
    },
		{
			"title": "node pattern",
			"author": "omer",
			"releaseDate": "10-2-1991",
			"keywords": "omer,node,javascript"
    }
  ]
};

app.configure(function () {
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
  app.use(bodyParser());
});

app.get('/', function (req, res) {
	res.render('index.jade', {
		layout: false
	});
});
app.get('/books', function (req, res) {
	console.log('books send', db.books);
	res.json(db.books);
});
app.get('/books/:id', function (req, res) {
	res.json(db.books[id]);
});
app.post('/books', function (req, res) {
  db.books.push({
    title:req.body.title,
    author:req.body.author,
    releaseDate:req.body.releaseDate,
    keywords:req.body.keywords
  })
  res.json(db.books);
});
app.listen(1337);
