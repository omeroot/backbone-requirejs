var conf = require('../conf/conf.js');
var jwt = require('jsonwebtoken');

module.exports = function (db) {
  var module = {};
  module.index = function (req, res) {
    res.render('index.jade', {
      layout: false
    });
  };
  module.login = function (req, res) {
    var result = db.users('users').find({email: req.body.email, password: req.body.password});
    if (!result)
      res.status(400).json({success: false, message: 'user not correct'});
    else {
      var token = jwt.sign(result, conf.secret);
      res.set({
        'X-AuthToken': token
      });
      res.status(200).json({success: true, email: req.body.email});
    }
  };
  module.userUpdate = function (req, res) {

  };

  return module;
};