define(['text!templates/login.html', '../js/Models/user.js'], function (loginTemplate, userModel) {
  var loginView = Backbone.View.extend({
    el: $('#app'),
    events: {
      'click #login-form-send': 'form_send'
    },
    render: function () {
      this.$el.html(loginTemplate);
    },
    getAttribute: function () {
      return {
        email: $("input[name=email]").val(),
        password: $("input[name=password]").val()
      };
    },
    form_send: function () {
      var model = new userModel(this.getAttribute());

      if (!model.isValid()) {
        $("input[name=password]").css("border", "1px solid red");
      } else {
        model.save(null, {
          complete: function (jqXHR) {
            if (jqXHR.status = 200) {
              var token = jqXHR.getResponseHeader('X-AuthToken');
              document.cookie = "email=" + jqXHR.responseJSON.email;
              document.cookie = "token=" + token;
              window.location.hash = 'profile';
            }
          }
        });
      }
    }
  });
  return loginView;
});