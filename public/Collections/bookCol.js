define(['models/book'], function (bookModel) {
	var bookCollection = Backbone.Collection.extend({
		url: '/books',
		model: bookModel,
	});
  return new bookCollection();
});
