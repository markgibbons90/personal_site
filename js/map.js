var markers = [];
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

	/*=============
	| Map Styling |
	=============*/
	var myStyles = [
		{
		    "featureType": "landscape.natural.landcover",
		    "elementType": "geometry.fill",
		    "stylers": [
		     	{ "visibility": "on" },
		      	{ "color": "#B1C47C" },
		      	{ "weight": 5 }
	    	]
	  	},
	  	{
	    "featureType": "water",
	    "elementType": "geometry.fill",
	    "stylers": [
	      		{ "color": "#8eaabb" }
	    	]
	  	}
	]
	/*=================
	| Map Styling ^^^ |
	=================*/

	/*=============
	| Map Options |
	=============*/
	var mapOptions = {
		center: new google.maps.LatLng(25, 70),
		zoom: 2,
		minZoom: 2,
		maxZoom: 7,
		panControl: false,
		zoomControlOptions: {
    		style: google.maps.ZoomControlStyle.SMALL
  		},
  		mapTypeControlOptions: {
      		mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    	},
    	mapTypeId: MY_MAPTYPE_ID
	};

	/*==================
	| Defining the map |
	==================*/
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


	/*=====================
	| To customize styles |
	=====================*/
	var styledMapOptions = {
    	name: 'Custom Style'
  	};

  	var customMapType = new google.maps.StyledMapType(myStyles, styledMapOptions);

  	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  	/*=========================
	| To customize styles ^^^ |
	=========================*/






	/*===============================
	| Defining a list of all places |
	===============================*/
	var places = [
		{
			name:        'Bristol', 
			coords:       new google.maps.LatLng(51.460278,-2.584129),
			description: 'This is where I live!'
		},
		{
			name:        'Singapore', 
			coords:       new google.maps.LatLng(1.338494,103.926788),
			description: 'This is where my grandparents live. I visit fairly frequently with the rest of my family. The food is mindblowing!'
		},
		{
			name:        'French Alps', 
			coords:       new google.maps.LatLng(45.09052,6.064945),
			description: 'I went here in June 2014 and cycled up some mountains.'
		},
		{
			name: 		 'CERN',
			coords: 	  new google.maps.LatLng(46.233023,6.055545),
			description: 'My girlfriend Lana was working here for about a year. I went to visit a few times and saw some crazy detectors. They were huge and underground.'
		},
		{
			name:        'Garda',
			coords:       new google.maps.LatLng(45.577282,10.706421),
			description: 'Took a trip to Lake Garda in August 2014. Visited the grand villa of d\'Annuncio, the Italian poet and war hero, and an eclectic character indeed!'
		},
		{
			name:        'Norway',
			coords:       new google.maps.LatLng(60.174306,10.257797),
			description: 'I went snowboarding here a few years ago. Needless to say, it was pretty rad.'
		},
		{
			name:        'France',
			coords:       new google.maps.LatLng(44.574817,1.404533),
			description: 'Summer 2012 - spent three weeks cycling, camping and generally smelling really bad. We covered about 2000km in the end, although I ate so many croissants that I somehow managed to <i>put on</i> weight...'
		},
		{
			name:        'Mallorca',
			coords:       new google.maps.LatLng(39.575064,2.651297),
			description: 'December 2011 - the first of a number of cycling "holidays" with a group of masochistic friends. The mountains were high, the routes were long, the pain was immense.'
		},
		{
			name:        'Greece',
			coords:       new google.maps.LatLng(37.984122,23.726665),
			description: 'I went on holiday here with friends over the Summer of 2010. We went bouldering and wildcamping on Tinos, partying on Santorini and sightseeing in Athens. We also shared a room in a hostel with the most terrifying man on Earth.'
		},
		{
			name:        'Hanoi, Vietnam',
			coords:       new google.maps.LatLng(21.034519,105.847923),
			description: 'I spent a couple of days here in August 2013. The city was chaotic and crossing the road was a matter of blind faith; the food was fantastic and the people were heartbreakingly friendly, given the nation\'s tragic past.'
		},
		{
			name:        'Japan',
			coords:       new google.maps.LatLng(35.689091,139.683502),
			description: 'I visited Japan with my family when I was younger. We stayed in a traditional inn in Tokyo and also with some friends in Yokohama, a couple of miles south. Japan has a fascinating and at times bewildering culture.'
		},
		{
			name:        'Tioman Island, Malaysia',
			coords:       new google.maps.LatLng(2.78531,104.168876),
			description: 'Spent a week here in Summer 2010. You are surrounded by wildlife on Tioman - monkeys roam the jungle and tropical fish inhabit the island\'s crystal waters. I was lucky enough to see a turtle while I was snorkelling one day.'
		},
		{
			name:        'Adeleide, Australia',
			coords:       new google.maps.LatLng(-34.906205,138.559141),
			description: 'I have some relatives who live here. They seemed unphased by two koalas noisily attacking each other in a tree outside their house.'
		},
		{
			name:        'Langkawi, Malaysia',
			coords:       new google.maps.LatLng(6.380812,99.744015),
			description: 'I went here with my family a few years ago. I mainly remember being bitten by mosquitoes. I think there were also monkeys...'
		},
		{
			name:        'The Cairngorms',
			coords:       new google.maps.LatLng(57.189855,-3.8241),
			description: 'I went walking/camping here with some friends just after Christmas 2012. It was very rugged and very cold.'
		},
		{
			name:        'Banbridge, NI',
			coords:       new google.maps.LatLng(54.319327,-6.221116),
			description: 'This is where my girlfriend is from. It truly is a fertile and pleasant land. (Ireland I mean).'
		},
	]

	/*==========================
	| Adding all places to map |
	==========================*/
	for(var i = 0; i < places.length; i++) {

		//Defining content for each marker's infoWindow
		var infoContent = "<div class='infoWindow'><h3>" + places[i].name + "</h3>" + places[i].description + "</div>"

		//Defining the marker for each place
		var marker = new google.maps.Marker(
			{
				position: places[i].coords,
				title:    places[i].name,
				map:      map,
				icon: 	  {url: 'img/icons/marker3.png'},
				html:     infoContent,//places[i].description,
			}
		);

		//Putting all markers in an array
		markers.push(marker);

		
		//Options for infoWindow
		var infoWindowOptions = {
			maxWidth: 0,
			alignBottom: true,
			pixelOffset: new google.maps.Size(-120, -28),
			closeBoxURL: 'img/icons-white/cancel-circle.png',
			boxStyle: {
				background: '#274862',
				fontSize: '13px',
				fontWeight: 300,
				fontFamily: '"Open Sans", sans-serif',
				color: '#fff',
				borderRadius: '10px',
				padding: '12px',
				opacity: 1,
				width: '240px',
			}
		};


		//Create info window
		var infoWindow = new InfoBox(infoWindowOptions);

		//Bring up infoWindow on CLICK
		google.maps.event.addListener(marker, 'click', function(){
			infoWindow.setContent(this.html);
			infoWindow.open(map, this);
		});	
	};

	var bristolMarker = markers[0];
	bristolMarker.setIcon({url: 'img/icons/redmarker.png'});
	

	

};


google.maps.event.addDomListener(window, 'load', initialize);


/*
@dark-blue: lighten(#172C3C, 2%);
@mid-blue:  lighten(#274862, 2%);
@red:       saturate(lighten(#995052, 10%), 10%);
@orange:    lighten(#D96831, 2%);
@yellow:    lighten(#E6B33D, 2%);
*/