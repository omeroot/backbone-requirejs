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
    'jQueryCookie': ['jQuery'],
    'Backbone' : ['Underscore','jQuery'],
    'Main' : ['Backbone']
  }
});

require(['Main','/js/modules/_utils.js'],function(main,utils){
  utils();
  main.start();
});
