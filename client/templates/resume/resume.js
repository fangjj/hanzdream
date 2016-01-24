Template.resume.onRendered(function() {
    $.ajax({
        url: '/Hanz-Resume-2016.pdf',
        success: function(data) {
            $('div.loader').remove();
            $('#my-resume').append('<embed width="100%" height="100%" src="/Hanz-Resume-2016.pdf" type="application/pdf" >');
        }
    });
});