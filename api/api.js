var utils = require('../utils/utils.js');
var uuid = require('node-uuid');
module.exports = function (db) {
  var module = {}

  module.verifyme = function (req, res) {
    res.status(200).json({success: true});
  };

  module.logout = function (req, res) {
    if (utils.isCookie(req)) {
      res.status(200).json({success: true, message: "logout success"});
    } else {
      res.status(401).json({success: false, message: "token missing"});
    }
  };

  module.book = function (req, res) {
    res.json(db.books('books'));
  };

  module.book_id = function (req, res) {
    res.json(db.books('books').find({id: req.params.id}));
  };

  module.book_post = function (req, res) {
    db.books('books').push({
      id: uuid.v1(),
      title: req.body.title,
      author: req.body.author,
      releaseDate: req.body.releaseDate,
      keywords: req.body.keywords
    });

    res.json(db.books('books'));
  };

  return module;
};