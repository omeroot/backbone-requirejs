define(['jQuery','../js/Models/book.js', 'jQueryCookie'], function ($,bookModel) {
  console.log($);
	var bookCollection = Backbone.Collection.extend({
		url: '/api/books',
		model: bookModel
	});
  return new bookCollection();
});
