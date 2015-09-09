module.exports = {
  isCookie: function (req) {
    var cookie = req.cookies.token || req.cookies.username;
    if (typeof cookie === 'undefined')
      return false;

    return true;
  }
};