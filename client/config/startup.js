Meteor.startup(function() {
    let userLang;
    if(localStorage.getItem('hanzDreamLang')){
        userLang = localStorage.getItem('hanzDreamLang');
    }else{
        userLang = 'en';
    }
    TAPi18n.setLanguage(userLang)
        .done(function () {
            //Session.set("showLoadingIndicator", false);
        })
        .fail(function (error_message) {
            // Handle the situation
            console.log(error_message);
        });
    //Session.setDefault('currentNav','/');
});