define(['Views/index','Views/register','Views/addBook','Views/login'],function(IndexView, RegisterView, addBookView,loginView){
  var MyRouter = Backbone.Router.extend({
    currentView : null,
    routes : {
      'register' : 'register',
      'index' : 'index',
      'addBook' : 'addBook',
      'login' : 'login'
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
    },
    login : function(){
      $.ajax('/api/verifyme',{
        method:'GET',
        success:function(data,responseText,jqXHR){
          if(jqXHR.status == 200)
            window.location.hash = 'index'
        },
        error: _.bind(function(jqXHR,textStatus,errorThrown){
          console.log(errorThrown);
          this.changeView(new loginView());
        },this)
      }, this);
    }
  });

  var r = new MyRouter();
  Backbone.history.start();
  return r;
});
