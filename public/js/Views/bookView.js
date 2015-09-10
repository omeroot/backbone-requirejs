define(['text!templates/books.html'], function (bookTemplate) {
  var bookView = Backbone.View.extend({
    events: {
      'dblclick li': 'dbclick',
      'click #edit-item': 'edit',
      'click #delete-item': 'deleteItem'
    },
    currentLi: null,
    template: _.template(bookTemplate),
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    dbclick: function (e) {
      if (this.currentLi == null) {
        this.currentLi = $(e.currentTarget);
        this.currentLi.addClass('edit');
        var val = $('.edit').html()
        $('div .edit').html("<input><button id='edit-item'>Edit</button></input>");
        $('input').val(val)
      }
    },
    edit: function (e) {
      var newVal = $('input').val();
      var iClass = $(e.currentTarget).parent().attr('class').split(" ")[0];
      this.model.set(iClass, newVal);
      this.model.save();
      this.clearEdit(newVal);
    },
    clearEdit: function (newVal) {
      $('input').remove();
      $('button #edit-item').remove();
      $('.edit').removeClass('edit');
      this.currentLi.html(newVal);
      this.currentLi = null;
    },
    deleteItem: function () {
      this.model.destroy();
      this.remove();
    }
  });
  return bookView;
});
