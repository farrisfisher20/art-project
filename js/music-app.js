/***********************************
  Scroll to top logo function
***********************************/
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 450) {
            $('.scrollToTopp').fadeIn();
        } else {
            $('.scrollToTopp').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0});
        return false;
    });
});

/***********************************
   Music page Youtube Image Load
***********************************/

$(document).ready(function(){
	$('.robertcrash').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/98ECR_-3LIk?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
	$('.marxtrukker').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/MXlxpiZtfig?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
	$('.dmarccantu').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/MiZo7P6o_QM?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jaredwilson').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/_hGmwtSpabM?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.versalife-vantagepoint').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/6EmWOTl1Gxs?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.cloudface').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/5YRwuvsSgSw?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.vaticanshadow').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/6zInHYPioyY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
});

/***********************************
            HOVER PLAYER
***********************************/
$(document).ready(function(){
  
  $entypo = $('[class*="entypo-play"]');
  $entypo.css("opacity", "0", 'line-height', '400px').css('line-height', '400px');

  if( $(window).width() > 768 ) {
  $entypo.mouseover(function() {
      $(this).animate({'opacity': '1'});
    }).mouseleave(function() {
      $(this).animate({'opacity': '0'});
    });
  }
});