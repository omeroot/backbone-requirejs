define(['text!templates/books.html','../js/Collections/bookCol.js','Views/bookView'],
  function (profileTemplate,bookCol,bookView) {
    var view = Backbone.View.extend({
      el: $('#list'),
      template: _.template(profileTemplate),
      events : {
        'click #logout' :  'logout',
        'click #add-book' : 'redirect_add_book'
      },
      render: function () {
        bookCol.fetch({
          reset : true,
          success : _.bind(function () {
            _.each(bookCol.models, _.bind(function(book){
              this.renderItem(book);
            }, this));
          }, this),
          error : function(data,responseText,xhr){
            console.log(responseText.status);
            window.location.hash = 'login';
          }
        })
        this.$el.append('<button id="logout">Logout</button>');
        this.$el.append('<button id="add-book">Add Book</button>');
      },
      renderItem: function(book){
        var v = new bookView({model : book});
        v.render();
        this.$el.append(v.$el);
      },
      logout: function( e ){
        $.ajax('/api/logout',{
          method:'GET',
          success: function(data,responseText,jqXHR){
            $.removeCookie("token");
            $.removeCookie("email");
            window.location.hash = 'login';
          }
        });
      },
      redirect_add_book: function(){
        window.location.hash = 'addBook';
      }
    });

    return view;
  });
