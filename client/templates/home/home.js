let cubeSlides;

formInit = function(i18n) {
    return {
        on: 'submit', // 'submit','change','blur'
        inline: 'true',
        onSuccess: function(event, fields) {
            event.preventDefault();
            Meteor.call('messageInsert', fields, function(err, res) {
                if(err) {
                    alert(err.message);
                } else {
                    $('.msg.modal').modal('show');
                }
            });
        },
        fields: {
            name: {
                identifier: 'name',
                rules: [
                    {
                        type   : 'empty',
                        prompt : i18n.__('your-name-err-empty')
                    },
                    {
                        type   : 'maxLength[20]',
                        prompt : i18n.__('your-name-err-length')
                    }
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type   : 'empty',
                        prompt : i18n.__('contact-email-err-empty')
                    },
                    {
                        type   : 'email',
                        prompt : i18n.__('contact-email-err-format')
                    },
                    {
                        type   : 'maxLength[30]',
                        prompt : i18n.__('contact-email-err-length')
                    }
                ]
            },
            subject: {
                identifier: 'subject',
                rules: [
                    {
                        type   : 'empty',
                        prompt : i18n.__('subject-err-empty')
                    },
                    {
                        type   : 'maxLength[20]',
                        prompt : i18n.__('subject-err-length')
                    }
                ]
            },
            message: {
                identifier: 'message',
                rules: [
                    {
                        type   : 'empty',
                        prompt : i18n.__('message-err-empty')
                    },
                    {
                        type   : 'maxLength[100]',
                        prompt : i18n.__('message-err-length')
                    }
                ]
            }
        }
    };
};

Template.home.onRendered(function() {
    //TODO: classes change
    $('#avatar').prop('class', 'sixteen wide mobile seven wide tablet six wide computer column');
    $('#intro').prop('class', 'sixteen wide mobile nine wide tablet ten wide computer column');
    $('#latest-articles').prop('class', 'sixteen wide mobile eight wide tablet six wide computer column');
    $('#rating-container').prop('class','sixteen wide mobile eight wide tablet six wide computer column');
    $('.skill').prop('class', 'eight wide mobile four wide tablet four wide computer column');
    $('#social-media-col').prop('class','center aligned sixteen wide mobile six wide tablet four wide computer column');
    $('#contact-form-col').prop('class','sixteen wide mobile ten wide tablet twelve wide computer column');

    $('.ui.progress').progress({
        //autoSuccess: false,
        showActivity: false
    });

    $('.shape').shape({
        onChange: function() {
            setTimeout(function() {
                $('.shape').shape('flip right');
            }, 5000);
        }
    });

    cubeSlides = Meteor.setTimeout(function() {
        $('.shape').shape('flip right');
    }, 5000);

    //cubeSlides = Meteor.setInterval(function() {
    //    $('.shape').shape('flip right');
    //}, 5000);
    //Tracker.autorun(function() {
    //    console.log('auto run');
    //    setTimeout(function() {
    //        $('.shape').shape('flip right');
    //    }, 2000);
    //});
    $('.contact.form').form(formInit(TAPi18n));
});

Template.home.events({
    'click #bg-img i.mail': function(event) {
        $('html, body').animate({
            scrollTop: $('#contact-wrapper').offset().top
        }, 1000);
    },
    'mouseenter #social-media-icons .column, touchend #social-media-icons .column': function(event) {
        if($(window).width() < 768) {
            event.preventDefault();
            let $elem = $(event.currentTarget);
            $elem.focus();
            $elem.children('.icon-link').css('height','40px');
            $elem.find('i').addClass('active');

            //$elem.children('.pointing').show().removeClass('fadeOut').addClass('fadeIn');
            $elem.children('.pointing').fadeIn(300);
        }
        //for iPhone safari
        if($(event.target).is('.label-link')) {
            window.open($(event.target).attr('href'),'_blank');
        }
    },
    'mouseleave #social-media-icons .column, blur #social-media-icons .column': function(event) {
        if($(window).width() < 768) {
            event.preventDefault();
            let $elem = $(event.currentTarget);
            //$elem.children('.pointing').removeClass('fadeIn').addClass('fadeOut');
            $elem.children('.icon-link').css('height','initial');
            $elem.children('.pointing').fadeOut(200);
            $elem.find('i').removeClass('active');
            //setTimeout(function() {
            //    $elem.children('.pointing').hide();
            //}, 500)
        }
    }
});

Template.home.onDestroyed(function() {
    Meteor.clearTimeout(cubeSlides);
});