Template.header.onRendered(function(){
    let currentNav = Router.current().route._path;
    $("a[href='" + currentNav + "']").addClass('active');
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
    "click #open-sidebar": function(event, template){
        event.preventDefault();
        //event.stopPropagation();
        $('.ui.sidebar').sidebar('setting', {
            defaultTransition: {
                computer: {
                    left   : 'uncover'
                },
                mobile: {
                    left   : 'overlay'
                }
            },
            onShow: function(){
                $('body').css('overflow','hidden');
            },
            onHidden: function(){
                $('body').css('overflow','initial');
            }
        }).sidebar('toggle');
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

            })
            .fail(function (error_message) {
                console.log(error_message);
            });
    },
    "click #select-cn": function(){
        TAPi18n.setLanguage("zh")
            .done(function () {
                localStorage.setItem('hanzDreamLang','zh');
            })
            .fail(function (error_message) {
                console.log(error_message);
            });
    }
});

Template.sidebar.events({
    "click #select-en": function(){
        TAPi18n.setLanguage("en")
            .done(function () {
                //$('.ui.sidebar').sidebar('hide');
            })
            .fail(function (error_message) {
                console.log(error_message);
            });
    },
    "click #select-cn": function(){
        TAPi18n.setLanguage("zh")
            .done(function () {
                localStorage.setItem('hanzDreamLang','zh');
            })
            .fail(function (error_message) {
                console.log(error_message);
            });
    },
    "click a": function(event, template){
        if($(event.target).attr('href')) {
            let targetHref = $(event.target).attr('href');
            Session.set('currentNav', targetHref);
            $("a[href='" + targetHref + "']").addClass('active');
            $("a[href!='" + targetHref + "']").removeClass('active');
            $('.ui.sidebar').sidebar('hide');
        }
    }
});