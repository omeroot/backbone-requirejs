define(function () {

  var OverrideRoute = function (route, name, callback) {

    //route = route string or reqular expression
    //her eşleşen route da route callback e argüman gibi geçirilicek
    //name argümanı trig edilir "route:name" eventi gibi route eşleştiğinde
    //callback yoksa router[name] kullanılır
    var router = this;

    if (!callback) callback = this[name];

    var check = function (callback) {
      $.ajax('/api/verifyme', {
        method: 'GET',
        success: _.bind(function (data, responseText, jqXHR) {
          if (jqXHR.status == 200) {
            this.loggedIn = true;
          }
        }, this),
        error: _.bind(function (jqXHR, textStatus, errorThrown) {
          this.loggedIn = false;
        }, this),
        complete: _.bind(function () {
          callback(null, this.loggedIn);
        }, this)
      }, this);
    };

    function init() {
      check(_.bind(function (err, data) {
        if (err) throw err;
        if (data == true) {
          if (route == 'login') {
            callback = this['profile'];
          }
          callback.apply(router, arguments);
        } else {
          if (route != 'login') {
            callback = this['login'];
          }
          callback.apply(router, arguments);
        }
      }, this));
    }

    return Backbone.Router.prototype.route.call(this, route, name, init);
  };

  var OverrideSync = function () {

    $.ajaxSetup({
      beforeSend: function (xhr) {
        xhr.setRequestHeader(
            'X-AuthToken',
            $.cookie('token') || "GETLUCKY"
        );
      }
    });

    var sync = Backbone.sync;

    Backbone.sync = function (method, model, options) {
      options = options || {};
      options.beforeSend = function (xhr) {
        xhr.setRequestHeader(
            'X-AuthToken',
            $.cookie('token') || "GETLUCKY"
        );
      };
      options.error = function (xhr, status, error) {
      };

      return sync.call(Backbone, method, model, options);
    };
  };

  return {
    overrideSync : OverrideSync,
    overrideRoute : OverrideRoute
  };
});

