define(['mainView','text!templates/register.html'],
  function (mainView, LoginTemplate) {
    var view = mainView.extend({
      el: $('#app'),
      events: {
        'click #login-form-send': 'formSend'
      },
      render: function () {
        this.$el.html(LoginTemplate);
      },
      formSend: function () {
        window.location.hash = 'index';
      }
    });

    return view;
  });
