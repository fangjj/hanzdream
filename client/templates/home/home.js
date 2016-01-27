Template.home.onRendered(function() {
    $('.contact.form').form({
        on: 'blur', // 'submit','change','blur'
        inline: 'true',
        onSuccess: function(event, fields) {
            event.preventDefault();
            Meteor.call('messageInsert', fields, (err, res) => {
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
                        prompt : 'Please enter your name'
                    }
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type   : 'email',
                        prompt : 'Please enter a valid email'
                    }
                ]
            },
            subject: {
                identifier: 'subject',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your message subject'
                    },
                    {
                        type   : 'maxLength[10]',
                        prompt : 'Subject must be less than {ruleValue} characters'
                    }
                ]
            },
            message: {
                identifier: 'message',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your message'
                    },
                    {
                        type   : 'maxLength[100]',
                        prompt : 'Message must be less than {ruleValue} characters'
                    }
                ]
            }
        }
    })
});

Template.home.events({
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