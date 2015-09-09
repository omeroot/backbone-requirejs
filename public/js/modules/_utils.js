define(function () {
  var init = function () {
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
  }

  return init;
});