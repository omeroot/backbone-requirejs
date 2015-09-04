define(function(){
  var Book = Backbone.Model.extend({
    defaults : {
      title: ' ',
      author: ' ',
      releaseDate: ' ',
      keywords: ' '
    }
  });

  return Book;
});
