<!DOCTYPE html>
<html>

<head>
	<!--[if lt IE 9]>
	<script src="js/html5shiv.js"></script>
	<![endif]-->

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!--FONTS-->
	<link href='http://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,600' rel='stylesheet' type='text/css'>

	<link rel="icon" type="image/png" href="img/mark-fav.png">

	<link rel='stylesheet' href='css/fonts.css' type='text/css'>

	<!--STYLESHEETS-->
	<link rel='stylesheet' href='css/normalize.css' type='text/css'>
	<link rel='stylesheet' href='css/styles.css' type='text/css'>

	<title>Mark Gibbons - Front End Developer</title>
</head>

<body>

<header>
	<div class="main-container">
		<a href="index.html" id="logo">
			<h1>Mark Gibbons</h1>
		</a>
		<h2>Web Developer</h2>
		
		<nav>
			<a href="#work">Sample Work</a>
			<a href="#cv">CV</a>
			<a href="#about">About</a>
			<a href="#contact">Contact</a>
		</nav>
	</div>
</header>

<div class='buffer'></div>


<!-- =============== START PAGE =============== -->

<section id='start-page'>
	<div class='main-container'>
		<h1>Hi, my name is Mark</h1>
		<h2>
			I'm looking for my first job as a web developer. I built this page to showcase my skills and tell you a little bit about myself. Click the button below or scroll down to find out more.
		</h2>
		<button class='center' id='start'>Let's go!</button>
	</div><!-- .main-container -->
	
</section><!-- #start-page -->


<!-- =============== PAGE 2 - WORK =============== -->

<section id='work'>
	<div class="main-container">
		<h1>Sample Work</h1>
		<h2>Here are some examples of work I've done in the last year. This work spans my learning process from my first simple HTML/CSS page to a more complex application which I am currently building.
		For some code samples, please take a look at my <a href="https://github.com/markgibbons90" target="_blank">GitHub page</a>.</h2>
		<div class='row'>
			<div class='col-3'>
				<div class='center sample-img' id='sample-img-2'>
					<div class='sample-caption'>
						<h2 >CS Supply Chains</h2>
						<p>Independent supply chain consultancy</p>
						<a href='http://cssupplychains.co.uk' target='_blank'><button>Go to website</button></a>
					</div>
				</div>
				<p class='center'>
					A simple static site built with the Bootstrap framework. This is one of the first sites I built as I was learning HTML/CSS.
				</p>
			</div>
			<div class='col-3'>
				<div class='center sample-img' id='sample-img-1'>
					<div class='sample-caption'>
						<h2>Taresh Ltd</h2>
						<p>Chemical and pharmaceutical wholesaler</p>
						<a href='http://tareshpharma.co.uk' target='_blank'><button>Go to website</button></a>
					</div>
				</div>
				<p class='center'>
					A fully responsive static site built for an independent company.
				</p>
			</div>
			
			<div class='col-3'>
				<div class='center sample-img' id='sample-img-3'>
					<div class='sample-caption'>
						<h2>Eatease</h2>
						<p>Restaurant review site</p>
						<a href='http://eatease.pythonanywhere.com' target='_blank'><button>Go to website</button></a>
					</div>
				</div>
				<p class='center'>
					This is an ongoing personal project of mine. It's a restaurant review website for people with allergies, built with Django.
				</p>
			</div>
		</div><!--==== ROW ==== -->
	</div>
</section>


<!-- =============== PAGE 3 - CV =============== -->

<section id='cv'>
	<div class='main-container'>
		<h1>My CV</h1>
		<div class='row'>
			<div class='title-col'>
				<h2 id='bio'>Bio</h2>
			</div>
			<div class='content-col'>
				<p>
					I am a 24 year old mathematics graduate looking to enter the world of web development.  
					I previously worked as an administrator for an investment platform, but realised the world of 
					finance wasn't for me.
				</p>
				<p>
					I've spent the last year teaching myself to code, starting with basic HTML pages and eventually moving
					on to more serious back end code.  It's been a steep learning curve, but I've enjoyed the technical and 
					creative challenges that web development has thrown at me.  I'm looking for work in either a front end 
					or back end role, preferably working with the Django framework. 
				</p>
			</div>
		</div><!-- Row -->

		<div class='row'>
			<div class='title-col'>
				<h2 id='hardskills'>Coding Skills</h2>
			</div>
			<div class='content-col'>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>HTML/CSS</h3>
					</div>
					<div class='cv-td'>
						<p>HTML5, CSS3; LESS and SASS</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>Javascript</h3>
					</div>
					<div class='cv-td'>
						<p>Javascript and jQuery. Basic knowledge of front end MVC frameworks such as AngularJS.</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>Google Maps API</h3>
					</div>
					<div class='cv-td'>
						<p>I am a competent user of the Google Maps Javascript API. Please see my <a href='#places'>example map</a> below.</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>PHP/MySQL</h3>
					</div>
					<div class='cv-td'>
						<p>Working knowledge of PHP and MySQL.</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>Python/Django</h3>
					</div>
					<div class='cv-td'>
						<p>Experience using Python and the Django framework. For an example of an application I've built with Django, please see my <a href='#work' id='sample-anchor'>sample work</a>.</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>Other</h3>
					</div>
					<div class='cv-td'>
						<p>Linux command line. Version control with Git.</p>
					</div>
				</div>
			</div>
		</div><!-- Row -->

		<div class='row'>
			<div class='title-col'>
				<h2 id='softskills'>General Skills</h2>
			</div>
			<div class='content-col'>
				<p>
					During my previous employment I put the following skills into practice on a daily basis: 
					<ul>
						<li>working in a team;</li>
						<li>working under pressure;</li>
						<li>meeting strict deadlines;</li>
						<li>effectively communicating with clients and colleagues.</li>
					</ul>
				</p>
				<p>
					I pride myself on my:
					<ul>
						<li>attention to detail;</li>
						<li><i>ability</i> to learn new things;</li>
						<li><i>desire</i> to learn new things.</li>
					</ul>
				</p>
			</div>
		</div><!-- Row -->

		<div class='row'>
			<div class='title-col'>
				<h2 id='work-exp'>Work Experience</h2>
			</div>
			<div class='content-col'>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>2014&ndash;</h3>
					</div>
					<div class='cv-td'>
						<h3>Self-employed</h3>
						<p>I created two simple static websites for small businesses. I have also spent time creating personal projects for learning purposes.</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>Feb&ndash;Nov 2013</h3>
					</div>
					<div class='cv-td'>
						<h3>Winterflood Securities - Reconciliations Administrator</h3>
						<p>My main roles included performing daily account reconciliations and making daily client money calculations to adhere to FCA regulations. Diligence and accuracy were vital and I regularly had to communicate with clients regarding their accounts.</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>Oct&ndash;Dec 2012</h3>
					</div>
					<div class='cv-td'>
						<h3>Rathbone Greenbank - Internship</h3>
						<p>I worked on a project modelling potential new fee structures, quantifying any effect on revenue and identifying how different client subsets would be affected. I also undertook various other tasks, including research and compiling client profiles.</p>
					</div>
				</div>
			</div>
		</div><!-- Row -->

		<div class='row'>
			<div class='title-col'>
				<h2 id='edu'>Education</h2>
			</div>
			<div class='content-col'>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>2014&ndash;</h3>
					</div>
					<div class='cv-td'>
						<p>Treehouse, Codecademy, Stack Overflow, various books and online tutorials.</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>2008&ndash;2012</h3>
					</div>
					<div class='cv-td'>
						<p>University of Bristol - MSci Mathematics</p>
					</div>
				</div>
				<div class='cv-row'>
					<div class='cv-th'>
						<h3>2001&ndash;2008</h3>
					</div>
					<div class='cv-td'>
						<p>The London Oratory School</p>
					</div>
				</div>
			</div>
		</div><!-- Row -->
	</div><!-- Main Container -->
</section>



<!-- =============== PAGE 4 - ABOUT =============== -->

<section id='about'>
	<div class='main-container'>
		<h1>About Me</h1>

		<div class='profile-image center'></div>

		<div class='row'>
			<div class='title-col'>
				<h2 id='interests'>My Interests</h2>
			</div>
			<div class='content-col'>
				<p>
					In my spare time I like to take part in various outdoor activities, including cycling, walking, camping and climbing.  I have also been known to indulge in the odd bit of wild swimming, as long as it's not too cold.  Every now and then I get the urge to race my bike, but this invariably results in me turning up with a level of optimism equal only to my lack of fitness.  I once finished in the top fifteen of a race... By this I mean I came fifteenth.
				</p>
				<p>
					I also enjoy reading.  My favourite books include <i>HHhH</i> by Laurent Binet, <i>Burmese Days</i> by George Orwell and <i>The Catcher in the Rye</i> by JD Salinger. I'm a keen film viewer and love the <a href='http://watershed.co.uk' target='_blank'>Watershed</a>.
				</p>
				<p>
					When I get the chance I love to travel.  Check out a map of my travel life below.
				</p>
			</div>
		</div><!-- ROW -->

		<div class='row'>
			<div class='title-col'>
				<h2 id='places'>Places I've been</h2>
			</div>
			<div class='content-col'>
				<p>
					Here is a map of places I've travelled to - click on the map pins for a short description of each place, and admire the custom styling I've applied to the map!
				</p>
				<div id='map-canvas' class='center'></div>
			</div>
		</div><!-- ROW -->
	</div><!-- CONTAINER -->
</section>




<!-- =============== PAGE 5 - CONTACT =============== -->

<section id='contact'>
	<div class='overlay'>
		<div class='main-container'>
			<h1>Contact</h1>


			<form id='ajax-contact' method='post' action='mailer.php'>
				<input id='title' name='title' type='text' value='' />
				<input id='name' name='name' type='text' class='center' placeholder='Name' required />
				<input id='email' name='email' type='email' class='center' placeholder='Email' required />
				<textarea id='message' name='message' class='center' placeholder='Message' rows='8' required></textarea>

				<button type='submit' class='center' id='submit-button'>Submit</button>
			</form>

			<div class='messages-container center'>
				<div id='form-messages' class='center'></div>
				<div id='exit-icon'></div>
			</div>

		</div><!-- CONTAINER -->
	</div>
</section>








<!-- =============== FOOTER =============== -->

<footer id='footer'>
	<div class='main-container'>
		<h2>Connect</h2>
		<p id='email-me'>
			mark [AT] gibbo [dot] co
		</p>
		<p id='call-me'>
			If you can see this then you have Javascript disabled.
		</p>
		<p id='linkedin'>
			<a href='https://uk.linkedin.com/in/markgibbons3' target='_blank'>Mark on LinkedIn</a>
		</p>
		<p id='github'>
			<a href='https://github.com/markgibbons90' target='_blank'>Mark on Git Hub</a>
		</p>
	</div>
</footer>













<!-- JAVASCRIPT -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script type="text/javascript" src="js/easing.js"></script>
<script type="text/javascript" src="js/waypoints.js"></script>
<script type="text/javascript" src="js/animatescroll.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZcXdX2ylekKUi5F4HCVWh9cRw8hTuicQ"></script>
<script type="text/javascript" src="js/infobox.js"></script>
<script type="text/javascript" src="js/map.js"></script>



</body>

</html>