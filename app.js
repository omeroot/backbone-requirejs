var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var lowdb = require('lowdb');
var jwt = require('jsonwebtoken');
var app = express();
var uuid = require('node-uuid');

var books = lowdb('./db/books.json');
var users = lowdb('./db/users.json');

/*
 users('users').push({
 email:'demircanomer@gmail.com',
 username:'demircanomer',
 password:'123'
 });*/

/*
 books('books').push({
 "id": uuid.v1(),
 "title": "backbone",
 "author": "omer",
 "releaseDate": "10-10-1991",
 "keywords": "omer,backbone"
 });
 books('books').push({
 "id": uuid.v1(),
 "title": "node pattern",
 "author": "omer",
 "releaseDate": "10-2-1991",
 "keywords": "omer,node,javascript"
 });*/

var apiRouter = express.Router();


app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', function (req, res) {
  res.render('index.jade', {
    layout: false
  });
});

app.post('/user/:id', function (req, res) {
  /*db('users').push({
   email: req.body.email,
   password: req.body.password
   });*/
  var result = users('users').find({email: req.body.email, password: req.body.password});
  if (!result)
    res.status(400).json({success: false, message: 'user not correct'});
  else {
    var token = jwt.sign(result, 'omer');
    res.set({
      'X-AuthToken': token
    });
    res.status(200).json({success: true, email: req.body.email});
  }
});

app.put('/user/:id', function (req, res) {
  console.log('in put');
});

apiRouter.use(function (req, res, next) {
  console.log(req.headers['x-authtoken']);
  var token = req.headers['x-authtoken'];
  if (!token) {
    res.status(401).json({success:false,message: "token not found"});
  } else {
    next();
  }
});

apiRouter.get('/verifyme',function(req,res){
  res.status(200).json({success:true});
});

apiRouter.get('/books', function (req, res) {
  res.json(books('books'));
});
apiRouter.get('/books/:id', function (req, res) {
  res.json(books('books').find({}));
});
apiRouter.post('/books', function (req, res) {
  books('books').push({
    title: req.body.title,
    author: req.body.author,
    releaseDate: req.body.releaseDate,
    keywords: req.body.keywords
  });

  res.json(books('books'));
});

app.use('/api', apiRouter);
app.listen(1337);

module.exports = app;