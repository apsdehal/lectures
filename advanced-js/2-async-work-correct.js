// This is the correct way

var fs = require('fs');
var requests = require('requests');

fs.readdir('./some-path', function (err, files) {
	// This is the callback function which is asynchronous
});


requests.get('https://google.com', function (err, body) {
	// Asynchronous again
});

$.get('https://google.com').done(function (data) {
	// Async success
}).fail(function (err) {
	// Async error
});


window.setTimeout(function () {
	// Some async work to be done here
}, 1000);
