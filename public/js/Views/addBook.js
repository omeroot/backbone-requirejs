define(['text!templates/addbook.html','Collections/bookCol.js'],
function(addTemplate,bookCol){
  var addView = Backbone.View.extend({
    el: $('#app'),
    events: {
      'click #book-form-send' : 'addOne',
      'click #list-books' : 'redirect_index'
    },
    initialize: function(){

    },
    render: function(){
      this.$el.html(addTemplate);
    },
    newBook: function(){
      return {
        title: $("input[name=bookName]").val(),
        author: $("input[name=bookAuthor]").val(),
        releaseDate: $("input[name=releaseDate]").val(),
        keywords: $("input[name=keywords]").val(),
      };
    },
    addOne: function(){
      var n = this.newBook();
      bookCol.create(n,
      {
      success:function(data){
        console.log('success',data);
      },
      error:function(){
        console.log('error');
      }
      });
    },
    redirect_index: function(){
      window.location.hash='index';
    }
  });
  return addView;
});
