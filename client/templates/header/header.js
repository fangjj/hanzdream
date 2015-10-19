Template.header.onRendered(function(){

});

Template.header.helpers({

});

Template.header.events({
    "click .dropdown": function(){
        $('.ui.dropdown').dropdown();
    },
    "click #open-sidebar": function(event, template){
        event.preventDefault();
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

            })
            .fail(function (error_message) {
                console.log(error_message);
            });
    }
});