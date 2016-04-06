// Create an event

var newEvent = new Event('build');

// Pass extra params
var newEventTwo = new CustomEvent('build', {
	'detail': 'This is a build event'
});

// Listen for the event
elem.addEventListener('build', function (e) {
	console.log(e.detail);
});

elem.dispatchEvent(newEventTwo);

// Use eventemitter2 package for better and easy API
