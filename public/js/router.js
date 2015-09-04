define(['Views/index','Views/login'],function(IndexView, LoginView){
  var MyRouter = Backbone.Router.extend({
    currentView : null,
    routes : {
      'login' : 'login',
      'index' : 'index'
    },
    changeView : function(view){
      if(this.currentView != null){
        this.currentView.undelegateEvents();
      }
      this.currentView = view;
      this.currentView.render();
    },
    index : function(){
      this.changeView(new IndexView());
    },
    login : function(){
      this.changeView(new LoginView());
    }
  });

  var r = new MyRouter();
  Backbone.history.start();
  return r;
});
