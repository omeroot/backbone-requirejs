define(['text!templates/addbook.html', 'Collections/bookCol.js'],
    function (addTemplate, bookCol) {
      var addView = Backbone.View.extend({
        el: $('#app'),
        events: {
          'click #book-form-send': 'addOne',
          'click #list-books': 'redirect_profile'
        },
        initialize: function () {

        },
        render: function () {
          this.$el.html(addTemplate);
        },
        newBook: function () {
          return {
            title: $("input[name=bookName]").val(),
            author: $("input[name=bookAuthor]").val(),
            releaseDate: $("input[name=releaseDate]").val(),
            keywords: $("input[name=keywords]").val(),
          };
        },
        addOne: function () {
          var n = this.newBook();
          bookCol.create(n,
              {
                success: _.bind(function () {
                  this.render();
                }, this),
                error: function () {
                  console.log('error');
                }
              }, this);
        },
        redirect_profile: function () {
          window.location.hash = 'profile';
        }
      });
      return addView;
    });
