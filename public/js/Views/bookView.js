define(['text!templates/books.html'],function(bookTemplate){
  var bookView = Backbone.View.extend({
    el : '<ul></ul>',
    template : _.template(bookTemplate),
    render : function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return bookView;
});
