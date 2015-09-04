require.config({
  paths : {
    jQuery : '/js/libs/jquery-2.1.4.min',
    Underscore : '/js/libs/underscore-min',
    Backbone : '/js/libs/backbone-min',
    text : '/js/libs/text',
    templates : '../templates',
    router : 'router',
    mainView : 'mainView',
    models : 'Models'
  },
  shim : {
    'Backbone' : ['Underscore','jQuery'],
    'Main' : ['Backbone']
  }
});

require(['Main'],function(main){
  main.start();
});
