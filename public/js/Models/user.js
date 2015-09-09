define(function(){
  var userModel = Backbone.Model.extend({
    urlRoot: 'user',
    url: function(){
      return this.urlRoot + '/' + this.attributes.email.split('@')[0];
    },
    success: function(){

    },
    validate: function( attributes ){
      if(attributes.password.length < 2)
        return "password length greater than 8"
    }
  });

  return userModel;
});
