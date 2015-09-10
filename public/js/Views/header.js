define(['text!templates/header.html'], function (headerTemplate) {
  var headerView = Backbone.View.extend({
    el: $('#header'),
    events: {
      'click #books': 'redirect_books',
      'click #add-book': 'redirect_add_book',
      'click #logout': 'redirect_logout'
    },
    render: function () {
      this.$el.html(headerTemplate);
    },
    redirect_books: function () {
      window.location.hash = 'profile'
    },
    redirect_add_book: function () {
      window.location.hash = 'addBook'
    },
    redirect_logout: function () {
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

  return headerView;
});