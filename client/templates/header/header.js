Template.header.onRendered(function(){
  let currentNav = Router.current().route._path;
  $("a[href='" + currentNav + "']").addClass('active');
  $('.ui.sidebar').sidebar({
    defaultTransition: {
      computer: {
        left   : 'overlay' // 'uncover' 'overlay'
      },
      mobile: {
        left   : 'overlay'
      }
    },
    onVisible: function(){
      $('body').css('overflow','hidden');
      $('#open-sidebar').removeClass('fadeIn').addClass('fadeOut');

    },
    onHide: function(){
      $('body').css('overflow','initial');
      setTimeout(function() {
        $('#open-sidebar').removeClass('fadeOut').addClass('fadeIn');
      }, 300);
    }
  });
  $('#select-lang').dropdown();
});

Template.header.helpers({

});

Template.header.events({
  "click a": function(event, template){
    if($(event.target).attr('href')) {
      let targetHref = $(event.target).attr('href');
      Session.set('currentNav', targetHref);
      $("a[href='" + targetHref + "']").addClass('active');
      $("a[href!='" + targetHref + "']").removeClass('active');
    }else{

    }
  },
  "click #open-sidebar, touchend #open-sidebar": function(event, template){
    event.preventDefault();
    //event.stopPropagation();
    $('.ui.sidebar').sidebar('toggle');
  },
  "mouseenter .ui.dropdown": function(){
    $('#select-lang').dropdown('show');
  },
  "mouseleave .ui.dropdown": function(){
    $('#select-lang').dropdown('hide');
  },
  "click #select-en": function(){
    TAPi18n.setLanguage("en")
      .done(function () {
        localStorage.setItem('hanzDreamLang','en');
        if(Router.current().location.get().pathname == '/'){
          $('.contact.form').form(formInit(TAPi18n));
        }
      })
      .fail(function (error_message) {
        console.log(error_message);
      });
  },
  "click #select-cn": function(){
    TAPi18n.setLanguage("zh")
      .done(function () {
        localStorage.setItem('hanzDreamLang','zh');
        if(Router.current().location.get().pathname == '/'){
          $('.contact.form').form(formInit(TAPi18n));
        }
      })
      .fail(function (error_message) {
        console.log(error_message);
      });
  },
  "click #logout": function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});

Template.sidebar.events({
  "click #select-en, touchend #select-en": function(){
    TAPi18n.setLanguage("en")
      .done(function () {
        localStorage.setItem('hanzDreamLang','en');
      })
      .fail(function (error_message) {
        console.log(error_message);
      });
  },
  "click #select-cn, touchend #select-cn": function(){
    TAPi18n.setLanguage("zh")
      .done(function () {
        localStorage.setItem('hanzDreamLang','zh');
      })
      .fail(function (error_message) {
        console.log(error_message);
      });
  },
  "click a, touchend a": function(event, template){
    event.preventDefault();
    let targetHref = $(event.target).attr('href');
    if(targetHref) {
      Session.set('currentNav', targetHref);
      $("a[href='" + targetHref + "']").addClass('active');
      $("a[href!='" + targetHref + "']").removeClass('active');
      $('.ui.sidebar').sidebar('hide');
      Router.go(targetHref);
    }
  }
});
