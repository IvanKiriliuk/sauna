$(document).ready(function () {

	$('.toggle_menu').click(function() {
    $('nav .main_ul').slideToggle();
  });
 
 	$('.content_carousel').slick({
 		slidesToShow: 3,
  	slidesToScroll: 1,
 	});
});

