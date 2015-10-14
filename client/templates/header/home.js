Template.header.onRendered(function(){

});

Template.header.events({
    "click .dropdown": function(){
        $('.ui.dropdown').dropdown();
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