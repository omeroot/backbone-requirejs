require.config({
  paths : {
    jQuery : '/js/libs/jquery-2.1.4.min',
    jQueryCookie: '/js/libs/jquery.cookie',
    Underscore : '/js/libs/underscore-min',
    Backbone : '/js/libs/backbone-min',
    text : '/js/libs/text',
    templates : '../templates',
    router : 'router',
    mainView : 'mainView'
  },
  shim : {
    'jQuery': {
      exports: '$'
    },
    'jQueryCookie': {
      'deps': ['jQuery']
    },
    'Backbone' : ['Underscore','jQuery'],
    'Main' : ['Backbone']
  }
});

require(['Main'],function(main){
  $.ajaxSetup({
    beforeSend: function (xhr)
    {
      xhr.setRequestHeader(
          'X-AuthToken',
          $.cookie('token') || "GETLUCKY"
      );
    }
  });

  var sync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
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

  main.start();
});
