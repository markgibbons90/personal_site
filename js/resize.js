// Resize start page + set h2 padding on page load
//================================================
$(document).ready(function(){
	var viewportHeight  = $(window).height();
	var headerHeight    = $('header').outerHeight();
	var pageHeight      = viewportHeight - headerHeight;
	var pageWidth       = $(window).width();
	var container       = $('#start-page .main-container')
	var containerHeight = container.height();

	if(pageHeight > 480){
		$('#start-page').outerHeight(pageHeight)

		if (pageHeight > containerHeight) 
		{
			container.css({
				'padding-top': (pageHeight - containerHeight)*0.5,
				'padding-bottom': (pageHeight - containerHeight)*0.5
			});
		};
	};
	//Set buffer height
	$('.buffer').height(headerHeight);
});

//Resize start page + set h2 padding when window size changes
//===========================================================
$(window).resize(function(){
	var viewportHeight  = $(window).height();
	var headerHeight    = $('header').outerHeight();
	var pageHeight      = viewportHeight - headerHeight;
	var pageWidth       = $(window).width();
	var container       = $('#start-page .main-container')
	var containerHeight = container.height();

	if(pageHeight > 480){
		$('#start-page').outerHeight(pageHeight)//.css('padding-top', pageHeight*0.1);

		if (pageHeight > containerHeight) 
		{
			container.css({
				'padding-top': (pageHeight - containerHeight)*0.5,
				'padding-bottom': (pageHeight - containerHeight)*0.5
			});
		};
	};
	//Set buffer height
	$('.buffer').height(headerHeight);
});



//Testing button clicking
$('#start').click(function(){

	var btnHeight = $('#start').outerHeight();

	$('#start').css('color', 'rgba(255,255,255,0)')

	$('#start').animate({
		'width': btnHeight,
		'height': btnHeight,
		'background': 'rgba(255,255,255,0)',
		'padding': '0',
		'color': 'rgba(255,255,255,0)'
	}, 500, 'easeInBack').text('').addClass('clicked').delay(500).fadeOut(300);
});