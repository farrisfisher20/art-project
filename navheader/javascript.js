$(function() {



	$(window).scroll(function(){console.log($(window).scrollTop());
			if($(window).scrollTop() > 2)
			{
				$('.main-nav').addClass('main-nav-shadow');
			}
			else {
				$('.main-nav').removeClass('main-nav-shadow');
			}
	 });

});