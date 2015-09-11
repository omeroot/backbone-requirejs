define(['Views/profile', 'Views/register', 'Views/addBook', 'Views/login', 'Views/header','utils']
    ,function (ProfileView, RegisterView, addBookView, loginView, headerView,utils) {
  var MyRouter = Backbone.Router.extend({
    currentView: null,
    loggedIn: false,
    routes: {
      'register': 'register',
      'profile': 'profile',
      'addBook': 'addBook',
      'login': 'login',
      'logout': 'login'
    },
    route: utils.overrideRoute,
    changeView: function (view) {
      if (this.currentView != null) {
        this.currentView.undelegateEvents();
        this.currentView.$el.empty();
      }
      this.currentView = view;
      this.currentView.render();
    },
    loadHeader: function () {
      new headerView().render();
    },
    profile: function () {
      this.loadHeader();
      this.changeView(new ProfileView());
    },
    register: function () {
      this.changeView(new RegisterView());
    },
    addBook: function () {
      this.changeView(new addBookView());
    },
    login: function () {
      this.changeView(new loginView());
    }
  });

  return MyRouter;
});
