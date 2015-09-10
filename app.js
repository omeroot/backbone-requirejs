var exServer = require('./init.js');
var lowdb = require('lowdb');


var verify = require('./middleware/verify.js');

var db = {
  books: lowdb('./db/books.json'),
  users: lowdb('./db/users.json')
}

var api = require('./api/api.js')(db);
var res = require('./responses/res.js')(db);

exServer.app.get('/', res.index);

exServer.app.post('/user/:id', res.login);
exServer.app.put('/user/:id', res.userUpdate);

exServer.apiRouter.use(verify);

exServer.apiRouter.get('/verifyme', api.verifyme);
exServer.apiRouter.get('/logout', api.logout);
exServer.apiRouter.get('/books', api.book);
exServer.apiRouter.get('/books/:id', api.book_id);
exServer.apiRouter.post('/books', api.book_post);
exServer.apiRouter.put('/books/:id',api.book_put);
exServer.apiRouter.delete('/books/:id',api.book_delete);
