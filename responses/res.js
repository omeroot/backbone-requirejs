var conf = require('../conf/conf.js');
var jwt = require('jsonwebtoken');

module.exports = {
  index: function (req, res) {
    res.render('index.jade', {
      layout: false
    });
  },
  login: function (req, res) {
    var result = users('users').find({email: req.body.email, password: req.body.password});
    if (!result)
      res.status(400).json({success: false, message: 'user not correct'});
    else {
      var token = jwt.sign(result, conf.secret);
      res.set({
        'X-AuthToken': token
      });
      res.status(200).json({success: true, email: req.body.email});
    }
  },
  userUpdate: function (req, res) {

  }
};