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
//www.youtube.com/embed/0sMirKhORtA
$(document).ready(function(){
  $('.blankmind').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/PVvOkYduVfQ?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.ladyfrnd').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/M-s7Z7HIoc0?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.appian').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/FJSOdnqYLd4?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
   $('.innershades').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/loG4xB4HGa8?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.corndogs').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/RN00ld15EyM?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
   $('.nummer').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/0sMirKhORtA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
	$('.huercos-opal').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/UZ6FM_0yJAc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.mrav').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/PVVHe9xYQSY?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
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

  // TOGGLE MENU
  $( ".mobile-toggle" ).click(function() {
    if ( $('.mobile-sandwich').hasClass('fa-bars') ) {
      $('.mobile-sandwich').removeClass('fa-bars').addClass('fa-close');

      $( "nav" ).animate({
        top: "50px"
      }, 500, function() {
        // Animation complete.
      });
     $('.mobile-nav').animate({
        boxShadow : "0px 0px 0px 0px #fff"
      }, 500, function() {
        // Animation complete.
      });
   } else {
      $('.mobile-sandwich').removeClass('fa-close').addClass('fa-bars');

      $( "nav" ).animate({
        top: "-250px",
      }, 500, function() {
        // Animation complete.
      });
      $('.mobile-nav').animate({
        boxShadow : "0px 1px 4px 0px #6C6C6C"
      }, 500, function() {
        });
    } // close else
  }); // close click
});