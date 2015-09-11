require.config({
  paths : {
    jQuery : 'libs/jquery-2.1.4.min',
    jQueryCookie: 'libs/jquery.cookie',
    Underscore : 'libs/underscore-min',
    Backbone : 'libs/backbone-min',
    text : 'libs/text',
    templates : '../templates',
    router : 'router',
    mainView : 'mainView',
    bookCol : 'Collections/bookCol',
    utils: 'modules/_utils',
    cache: 'cache'
  },
  shim : {
    'jQuery': {
      exports: '$'
    },
    'jQueryCookie': ['jQuery'],
    'Backbone' : ['Underscore','jQuery'],
    'Main' : ['Backbone','utils']
  }
});

require(['Main','utils'],function(main,utils){
  utils.overrideSync();
  main.start();
});