define(['text!templates/books.html', 'bookCol', 'Views/bookView'],
    function (profileTemplate, bookCol, bookView) {
      var view = Backbone.View.extend({
        el: $('#list'),
        template: _.template(profileTemplate),
        events: {
          'click #logout': 'logout'
        },
        render: function () {
          bookCol.fetch({
            reset: true,
            success: _.bind(function () {
              _.each(bookCol.models, _.bind(function (book) {
                this.renderItem(book);
              }, this));
            }, this),
            error: function (data, responseText, xhr) {
              console.log(responseText.status);
              window.location.hash = 'login';
            }
          });
        },
        renderItem: function (book) {
          var v = new bookView({model: book});
          v.render();
          this.$el.append(v.$el);
        },
        logout: function (e) {
          $.ajax('/api/logout', {
            method: 'GET',
            success: function (data, responseText, jqXHR) {
              $.removeCookie("token");
              $.removeCookie("email");
              window.location.hash = 'login';
            }
          });
        }
      });

      return view;
    });
