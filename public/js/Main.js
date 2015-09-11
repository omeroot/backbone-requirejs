define(['router', 'cache'],
  function (router, cache) {
    var r = new router();
    cache.router = r;
    Backbone.history.start({pushState : true});

    var start = function () {
      r.navigate('login', {
        trigger: true
      });
    };

    return {
      start: start
    };
  });
