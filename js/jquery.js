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
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/sHF7Gee6Qec?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.cloudface').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/5YRwuvsSgSw?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });
  $('.vaticanshadow').on('click', function() {
      $(this).html('<iframe width="400" height="100%" src="http://www.youtube.com/embed/6zInHYPioyY?autoplay=1" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
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

