var jwt = require('jsonwebtoken');
var conf = require('../conf/conf.js');

var verify = function (req, res, next) {
  var token = req.headers['x-authtoken'];

  if (!token) {
    res.status(401).json({success: false, message: "token incorrect"});
  } else {
    jwt.verify(token, conf.secret, function (err, decoded) {
      if (err) {
        res.status(401).json({success: false, message: "token incorrect"})
      } else {
        req.decoded = decoded;
        next();
      }
    })
  }
};

module.exports = verify;