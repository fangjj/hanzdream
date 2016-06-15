Template.goToTop.onRendered(function() {
  let fadeHeight = 400;
  var lastScrollTop = 0;
  const $goToTop = $('#go-to-top');
  $(window).scroll(function(event) {
    event.preventDefault();
    var st = $(this).scrollTop();
    if (st > fadeHeight) {
      if (st > lastScrollTop){
        //scroll down
        $goToTop.css('opacity','0');
      } else {
        //scroll up
        $goToTop.css('opacity','.3');
      }
    } else {
      $goToTop.css('opacity','0');
    }
    lastScrollTop = st;
  });
});

Template.goToTop.events({
  'click #go-to-top i, touchend #go-to-top i': (event) => {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }
});
