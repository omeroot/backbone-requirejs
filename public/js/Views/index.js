define(['text!templates/books.html','Collections/bookCol.js','Views/bookView'],
  function (indexTemplate,bookCol,bookView) {
    var view = Backbone.View.extend({
      el: $('#list'),
      template: _.template(indexTemplate),
      events : {
        'click #back-login' :  'redirect_login',
        'click #add-book' : 'redirect_add_book'
      },
      render: function () {
        bookCol.fetch({
          reset : true,
          success : _.bind(function () {
            _.each(bookCol.models, _.bind(function(book){
              this.renderItem(book);
            }, this));
          }, this)
        }).complete(function(){

        });
        this.$el.append('<button id="back-login">Register</button>');
        this.$el.append('<button id="add-book">Add Book</button>');
      },
      renderItem: function(book){
        var v = new bookView({model : book});
        v.render();
        this.$el.append(v.$el);
      },
      redirect_login: function( e ){
        window.location.hash = 'register';
      },
      redirect_add_book: function(){
        window.location.hash = 'addBook';
      }
    });

    return view;
  });
