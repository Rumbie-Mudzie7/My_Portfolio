(function ($) {
 "use strict";


/***************************************
 jQuery MeanMenu activation code
 ***************************************/
$('nav#dropdown').meanmenu({
  siteLogo: "<a href='index.html'>RUMBIE</a>"
});
	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 Team active
------------------------------ */  
  $(".team-member-area").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
 Testimonial active
------------------------------ */  
  $(".testimonial").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
Latest News active
------------------------------ */  
  $(".latest-news").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
Latest News active
------------------------------ */  
  $(".about-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });

/*----------------------------
header seach box
------------------------------ */  
$('li.search-button a i').on("click",function(e) {
  e.preventDefault();
  $('#searchbox').slideToggle('');
});
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   

/*--------------------------
 Sticky Menu Activation Code
---------------------------- */	
$(window).on('scroll', function(){
	if( $(window).scrollTop()>80 ){
		$('#sticky').addClass('stick');
		} else {
		$('#sticky').removeClass('stick');
	}
}); 
/*--------------------------
 One Page Navigatiopn active
---------------------------- */
	$('#nav').onePageNav({
		scrollOffset: 70
	});
/*-------------------------------
Counter Up
---------------------------------*/
	$('.about-counter').counterUp({
		delay: 50,
		time: 3000
	});
/*-------------------------------------
Fancybox jquery activation Code
-------------------------------------*/
 $('.fancybox').fancybox();

//search box focus effect
//----------------------------------
$('#search-form .form-control').on('focusin', function () {
	$('#search-form').addClass('active');
});

$('#search-form .form-control').on('focusout', function () {
	$('#search-form').removeClass('active');
});


//js popup search box effect
//----------------------------------
$('.btn-search-form-toggle').on('click', function () {
	$("#popup-search-box-area").toggleClass('search-form-show');
});

})(jQuery); 