define(['text!templates/books.html','Collections/bookCol.js','Views/bookView'],
	function (indexTemplate,bookCol,bookView) {
		var view = Backbone.View.extend({
			el: $('#app'),
			template: _.template(indexTemplate),
			render: function () {
        bookCol.fetch({
          reset : true,
          success : _.bind(function () {
            _.each(bookCol.models, _.bind(function(book){
              this.renderItem(book);
            }, this));
          }, this)
        }).complete(function(){
          console.log('bitti');
        });

			},
      renderItem: function(book){
        var v = new bookView({model : book});
        v.render();
        this.$el.append(v.$el);

      }
		});

		return view;
	});
