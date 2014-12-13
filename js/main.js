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



//Start button animation on click
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

//Animating header size on scroll
var head = $('header');

$('#start-page').waypoint(function(direction){
	if(direction === 'down'){
		head.addClass('header-small');
	}
	if(direction === 'up'){
		head.removeClass('header-small');
	}
});

//Adding active class to nav links when viewing each page
$('#work').waypoint(function(direction){
	if(direction === 'down'){
		$("a[href='#work']").addClass('active');
	};
	if(direction === 'up'){
		$("a[href='#work']").removeClass('active');
	};
}, { offset: 96 });
$('#cv').waypoint(function(direction){
	if(direction === 'down'){
		$("a[href='#work']").removeClass('active');
		$("a[href='#cv']").addClass('active');
	};
	if(direction === 'up'){
		$("a[href='#work']").addClass('active');
		$("a[href='#cv']").removeClass('active');
	};
}, { offset: 96 });
$('#about').waypoint(function(direction){
	if(direction === 'down'){
		$("a[href='#cv']").removeClass('active');
		$("a[href='#about']").addClass('active');
	};
	if(direction === 'up'){
		$("a[href='#cv']").addClass('active');
		$("a[href='#about']").removeClass('active');
	};
}, { offset: 96 });
$('#contact').waypoint(function(direction){
	if(direction === 'down'){
		$("a[href='#about']").removeClass('active');
		$("a[href='#contact']").addClass('active');
	};
	if(direction === 'up'){
		$("a[href='#about']").addClass('active');
		$("a[href='#contact']").removeClass('active');
	};
}, { offset: 96 });


//Scrolling down on click of button
$('#start').click(function(){
	setTimeout( function(){
		$('#work').animatescroll({
			scrollSpeed: 1200, 
			easing: 'easeInQuad', 
			padding: 74
		});
	}, 500);
});

//Scrolling down from nav links to their respective sections
$('header nav a').click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$(href).animatescroll({
		scrollSpeed: 800,
		easing: 'easeInQuad',
		padding: 70
	});
});

$('#sample-anchor').click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$(href).animatescroll({
		scrollSpeed: 800,
		easing: 'easeInQuad',
		padding: 70
	});
});

//Scrolling to top when you click main header
$('#logo').click(function(e){
	e.preventDefault();
	$('#start-page').animatescroll({
		scrollSpeed: 800,
		easing: 'easeInQuad',
		padding: 200
	});
});

//Scrolling from link to map
$('a[href="#places"]').click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$(href).animatescroll({
		scrollSpeed: 400,
		easing: 'easeInQuad',
		padding: 100
	});
});

/* =========================
|  ==== FORM SUBMISSION ====
==========================*/
$(document).ready(function(){


	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');
	var messagesContainer = $('.messages-container');

	// Set up an event listener for the contact form.
	$('form').submit(function(event) {
		// Stop the browser from submitting the form.
		event.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		var ajaxPOST = $.post(
			'mailer.php',
			formData
		);

		var buttonHeight = $('#submit-button').outerHeight();


		$('#submit-button').animate({
			'width': buttonHeight,
			'height': buttonHeight,
			//'background': 'rgba(255,255,255,0)',
			'color': 'rgba(255,255,255,0)'
		}, 500, 'easeOutBack').text('').addClass('clicked');

		ajaxPOST.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			console.log('Submission worked');

			$('#submit-button').fadeTo(500, 0);

			$(messagesContainer).show(500);
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		}).fail(function(data) {

			$('#submit-button').fadeTo(500, 0);
			// Make sure that the formMessages div has the 'error' class.
			$(messagesContainer).show();
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});	
	
	//Exiting the error message
	$('#exit-icon').click(function(){
		$(messagesContainer).fadeOut(400);
		//fading the submit button back in
		$('#submit-button').delay(400).text('Submit').animate({
			'width': '100%',
			//'background': 'rgba(255,255,255,0)',
			'color': '#ffffff'
		}, 500, 'easeOutBack').fadeTo(500,1).removeClass('clicked');
	});

});


/*====================================================
| ==== Appending email address and phone no. =========
====================================================*/
$(document).ready(function(){
	var user = 'mark';
	var extension = '.co';
	var domain = 'gibbo';
	var address = user + '@' + domain + extension;

	$('#email-me').text(address);

	var num1 = '+44';
	var num2 = '(0)';
	var num3 = '7442';
	var num4 = '160';
	var num5 = '732';

	var number = num1 + ' ' + num2 + ' ' + num3 + ' ' + num4 + ' ' + num5;

	$('#call-me').text(number);
});

