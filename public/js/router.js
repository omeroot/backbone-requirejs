define(['Views/index','Views/register','Views/addBook'],function(IndexView, RegisterView, addBookView){
  var MyRouter = Backbone.Router.extend({
    currentView : null,
    routes : {
      'register' : 'register',
      'index' : 'index',
      'addBook' : 'addBook'
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
    },
    addBook : function(){
      this.changeView(new addBookView());
    }
  });

  var r = new MyRouter();
  Backbone.history.start();
  return r;
});
