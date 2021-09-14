
//src: https://codepen.io/prvnbist/pen/GQMPZq
$(function () {
	
	//On Scroll Functionality (aka where top bar shrinks a bit when scrolling)
	/*
    $(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
    */
   
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e) {
        console.log($('html,body'));
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 135
		},500);
		e.preventDefault();
	});
	
    
	//Toggle Menu (for small devices)
    /*
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
    */
	
});

