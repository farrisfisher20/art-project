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
  $('.versalife-vantagepoint').on('click', function() {
<<<<<<< HEAD
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/6EmWOTl1Gxs?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
=======
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/sHF7Gee6Qec?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
>>>>>>> 1d0dcfa306e5b146e6727654ad79fc88bb73ca73
  });
  $('.cloudface').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/5YRwuvsSgSw?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.vaticanshadow').on('click', function() {
      $(this).html('<iframe width="100%" height="454" src="http://www.youtube.com/embed/6zInHYPioyY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.ekman').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/psd_-pF6J2w?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.getthebalance').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/OvmADvzaLRA?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.seahunt').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/LNO1bCA9Klc?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.specter').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/EtYV7hQJboc?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.stl-small').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/g875VZERqYw?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.james-law').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/UsAS-0jleSA?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.fjaak').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/0v4M24ydeAc?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.joyobod').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/nJoVPcFOVZ4?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jaydaniel').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/n9-WM88RCa8?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.lestelle').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/Ujrumk04VPQ?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jordan').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/f4yAGlhQEiY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.stevesummers').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/HIocioWgcY4?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.terekke').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/OqpbJ6R7bfA?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.huercos').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/_nxpDiN3LS0?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  
  $('.callsuper').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/M8n4f4xosgc?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.evigt').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/kuRg9KTpoHs?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.jackj').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/W6FSAP5Gcvs?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.cantu').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/OPJMYllhN8Q?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.japanblues').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/18Ly6se_3ys?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.3chairs').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/DZxkrmYcrDU?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.scottgrooves').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/AXmVAFFBU5A?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.premier').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/5VhRCJWBKoU?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.km').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/om76r99ZX3U?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.ngly').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/LUS1QJmBFcc?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.joeyanderson').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/viYG7pIfpBY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.monkey').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/94DJNWeAZG0?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.real').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/xzfoa5yhhzA?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.birds').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/mEE6joE_NAY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.b12').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/L9_uTiqIBxA?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.bbc').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/FUxFU6cNhRY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.petre').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/_WNwKupFSzU?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.route8').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/H6Q7e3ZoU4E?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.deemonlover').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/E53wGCuDVkc?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.vril').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/ybj9w2rXJqY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.video').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/dx3XKbvVcys?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.lunatic').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/uLhsp1YQ0fg?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.lack').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/KFIXIsHnML8?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.la4a').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/5e-f9kWtaD4?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('.alva').on('click', function() {
      $(this).html('<iframe width="400" height="225" src="http://www.youtube.com/embed/cgxYOOLLLFE?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
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