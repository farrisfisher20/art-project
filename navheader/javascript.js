$(function() {

	$(window).scroll(function() {
		var top_offset = $('body').offset().top;
	  if (top_offset >= 40) {
	            alert('yolo');
	        } else {
	            $('.main-nav').removeClass('main-nav-shadow');
	        }
	});

	$(window).scroll(function(){console.log($(window).scrollTop());
			if($(window).scrollTop() > 2)
			{
				$('.main-nav').addClass('main-nav-shadow')
			}
	 });

});