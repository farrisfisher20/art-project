/***********************************
       Play button for music
***********************************/
$(document).ready(function(){
  var $play = $('.play-all-play');
  var $pause = $('.play-all-pause');
  var $playWrapper = $('.play-list-wrapper');
  var $playTip = $('.play-all-tip');

  if (window.outerWidth && window.outerWidth > 1024) {
   $play.fadeIn(700);
  }

  $play.click(function(){
    $('html, body').animate({scrollTop : 0});
    $playWrapper.removeClass("hidden").slideDown(450);
    $play.hide();
    $pause.removeClass("hidden").show();
  });
  $pause.click(function(){
    $playWrapper.slideUp(450);
    $pause.hide();
    $play.show();
  });
  $play.mouseover(
      function(){ $playTip.removeClass('hidden');
    }).mouseleave(
      function(){ $playTip.addClass('hidden');
  });
});
/***********************************
    Contact Form Confirmation
***********************************/

$('.confirmation').hide();
$(document).ready(function(){
  $('button').click(function(){
    $('.confirmation').fadeIn('fast');
  });
});

/***********************************
  large->thumb Image Replacement
***********************************/

if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs img').click(function(){
        $('#largeImage').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}

if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs1 img').click(function(){
        $('#largeImage1').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}

if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs2 img').click(function(){
        $('#largeImage2').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}

if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs3 img').click(function(){
        $('#largeImage3').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}

if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs4 img').click(function(){
        $('#largeImage4').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}

if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs5 img').click(function(){
        $('#largeImage5').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}

if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs6 img').click(function(){
        $('#largeImage6').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}
if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs7 img').click(function(){
        $('#largeImage7').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}
if (window.outerWidth && window.outerWidth > 700) {
$(document).ready(function(){
     $('#thumbs8 img').click(function(){
        $('#largeImage8').hide().attr('src',$(this).attr('src').replace('thumb','large')).fadeIn('350');
    });
});
}

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
  $('.parrish-solitary').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/I7tfNm-hi0A?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.blankmind').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/PVvOkYduVfQ?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.ladyfrnd').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/M-s7Z7HIoc0?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.appian').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/FJSOdnqYLd4?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.innershades').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/loG4xB4HGa8?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.corndogs').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/RN00ld15EyM?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
    $('.nummer').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/0sMirKhORtA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.huercos-opal').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/UZ6FM_0yJAc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.mrav').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/PVVHe9xYQSY?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
	$('.robertcrash').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/98ECR_-3LIk?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
	$('.marxtrukker').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/MXlxpiZtfig?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
	$('.dmarccantu').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/MiZo7P6o_QM?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jaredwilson').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/_hGmwtSpabM?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.versalife-vantagepoint').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/6EmWOTl1Gxs?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.cloudface').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/5YRwuvsSgSw?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.vaticanshadow').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/-PJPXq0EauM?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.ekman').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/RkswC1zsh2k?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.getthebalance').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/OvmADvzaLRA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.seahunt').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/LNO1bCA9Klc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.specter').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/EtYV7hQJboc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.stl-small').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/g875VZERqYw?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.james-law').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/UsAS-0jleSA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.fjaak').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/0v4M24ydeAc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.joyobod').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/nJoVPcFOVZ4?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jaydaniel').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/n9-WM88RCa8?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.lestelle').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/Ujrumk04VPQ?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jordan').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/f4yAGlhQEiY?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.stevesummers').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/HIocioWgcY4?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.terekke').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/OqpbJ6R7bfA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.huercos').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/_nxpDiN3LS0?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.callsuper').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/M8n4f4xosgc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.evigt').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/ZNkZyQXhRYA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jackj').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/W6FSAP5Gcvs?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.cantu').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/OPJMYllhN8Q?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.japanblues').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/18Ly6se_3ys?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.3chairs').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/DZxkrmYcrDU?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.scottgrooves').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/AXmVAFFBU5A?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.premier').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/5VhRCJWBKoU?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.km').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/om76r99ZX3U?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.ngly').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/LUS1QJmBFcc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.joeyanderson').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/viYG7pIfpBY?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.monkey').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/94DJNWeAZG0?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.real').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/xzfoa5yhhzA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.birds').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/mEE6joE_NAY?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.b12').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/L9_uTiqIBxA?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.bbc').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/FUxFU6cNhRY?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.petre').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/_WNwKupFSzU?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.route8').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/H6Q7e3ZoU4E?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.deemonlover').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/E53wGCuDVkc?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.vril').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/ybj9w2rXJqY?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.video').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/dx3XKbvVcys?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.lunatic').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/uLhsp1YQ0fg?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.lack').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/KFIXIsHnML8?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.la4a').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/5e-f9kWtaD4?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.alva').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/cgxYOOLLLFE?autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.play-all-play').on('click', function() {
      $(".play-list-wrapper").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/videoseries?list=PLBA54BRzfYavrZbMCnw9lUdhcZ7Z3ypE1&autoplay=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.play-all-pause').on('click', function() {
      $(".play-list-wrapper").html('<iframe width="100%" height="100%" src="" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

});
/***********************************
  Expand/Collapse Animation
***********************************/
$(document).ready(function(){
  var animspeed = 1250; // animation speed in milliseconds

  var $blockquote = $('.bigtext');

  var height = $blockquote.height()*1.07;
  var mini = $('.bigtext .writing-paragraph').eq(0).height()*1.15;

  if( $(window).width() < 768 ) {
     height = $blockquote.height()*1.09;
    mini = $('.bigtext .writing-paragraph').eq(0).height()*1.13;
  }

  $blockquote.attr('data-fullheight',height+'px');
  $blockquote.attr('data-miniheight',mini+'px');
  $blockquote.css('height',mini+'px');

  $('.expand').on('click', function(e){
    $text = $(this).prev();

    $text.animate({
      'height': $text.attr('data-fullheight')
    }, animspeed);
    $(this).next('.contract').removeClass('hide');
    $(this).addClass('hide');
  });

  $('.contract').on('click', function(e){
    $text = $(this).prev().prev();

    $('.content1').nextAll('.content1').hide().delay(1250).fadeIn(100);

    $text.animate({
      'height': $text.attr('data-miniheight')
    }, animspeed);
    $(this).prev('.expand').removeClass('hide');
    $(this).addClass('hide');
  });
});

$(document).ready(function(){
  var animspeed = 1250; // animation speed in milliseconds

  var $blockquote = $('.bigtext-one');

  var height = $blockquote.height()*1.08;
  var mini = $('.bigtext-one p').eq(0).height()*1.15;

  if( $(window).width() < 768 ) {
     height = $blockquote.height()*1.1;
     var mini = $('.bigtext-one p').eq(0).height()*1.1;
  }
  $blockquote.attr('data-fullheight',height+'px');
  $blockquote.attr('data-miniheight',mini+'px');
  $blockquote.css('height',mini+'px');

  $('.expand').on('click', function(e){
    $text = $(this).prev();

    $text.animate({
      'height': $text.attr('data-fullheight')
    }, animspeed);
    $(this).next('.contract1').removeClass('hide');
    $(this).addClass('hide');
  });

  $('.contract1').on('click', function(e){
    $text = $(this).prev().prev();

    $text.animate({
      'height': $text.attr('data-miniheight')
    }, animspeed);
    $(this).prev('.expand').removeClass('hide');
    $(this).addClass('hide');
  });
});
/***********************************
            Read More
***********************************/
$(document).ready(function(){
  if( $(window).width() > 768 ) {
    $('.read-more').hide();
    $('.expand').mouseover(function() {
      $('.read-more').show();
    }).mouseleave(function() {
      $('.read-more').hide();
    });
  } else {
    $('.read-more').hide();
  }
});
/***********************************
            HOVER PLAYER
***********************************/
$(document).ready(function(){

  $entypo = $('[class*="entypo-play"]');
  $entypo.css("opacity", "0");

  if( $(window).width() > 768 ) {
  $entypo.mouseover(function() {
      $(this).animate({'opacity': '1'});
    }).mouseleave(function() {
      $(this).animate({'opacity': '0'});
    });
  }
});

$(document).ready(function(){
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