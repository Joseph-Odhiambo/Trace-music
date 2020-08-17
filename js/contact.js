/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Google Map


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');

	initMenu();
	setHeader();
	initGoogleMap();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length && $('.hamburger').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});

			close.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Google Map

	*/

	// function initGoogleMap()
	// {
	// 	var myLatlng = new google.maps.LatLng(41.40338, 2.17403);
    // 	var mapOptions = 
    // 	{
    // 		center: myLatlng,
	//        	zoom: 14,
	// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
	// 		draggable: true,
	// 		scrollwheel: false,
	// 		zoomControl: true,
	// 		zoomControlOptions:
	// 		{
	// 			position: google.maps.ControlPosition.RIGHT_CENTER
	// 		},
	// 		mapTypeControl: false,
	// 		scaleControl: false,
	// 		streetViewControl: false,
	// 		rotateControl: false,
	// 		fullscreenControl: true,
	// 		styles:
	// 		[
	// 		  {
	// 		    "featureType": "road.highway",
	// 		    "elementType": "geometry.fill",
	// 		    "stylers": [
	// 		      {
	// 		        "color": "#ffeba1"
	// 		      }
	// 		    ]
	// 		  }
	// 		]
    // 	}

    // 	// Initialize a map with options
    // 	map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// 	// Re-center map after window resize
	// 	google.maps.event.addDomListener(window, 'resize', function()
	// 	{
	// 		setTimeout(function()
	// 		{
	// 			google.maps.event.trigger(map, "resize");
	// 			map.setCenter(myLatlng);
	// 		}, 1400);
	// 	});
	// }

});
//form input validation
$(document).ready(function(){
	$("form#contact_form").submit(function(event){
	  // event.preventDefault();
	  var name = $("input#name").val();
	  var email = $("input#email").val();
	  if (name && email){
		alert (name + ", we have received your message. Thank you for reaching out to us.");
	  }
	  else {
		alert("Please enter your name and email!");
	  }
	  
	});
  
  });