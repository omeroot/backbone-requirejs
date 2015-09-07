define(['Views/index','Views/register'],function(IndexView, RegisterView){
  var MyRouter = Backbone.Router.extend({
    currentView : null,
    routes : {
      'register' : 'register',
      'index' : 'index'
    },
    changeView : function(view){
      if(this.currentView != null){
        this.currentView.undelegateEvents();
        this.currentView.$el.empty();
      }
      this.currentView = view;
      this.currentView.render();
    },
    index : function(){
      this.changeView(new IndexView());
    },
    register : function(){
      this.changeView(new RegisterView());
    }
  });

  var r = new MyRouter();
  Backbone.history.start();
  return r;
});
