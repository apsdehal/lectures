// Let's talk about dedicated workers
// Accessible only one script
// Just like the concept of shared and dedicated cores


// First test if workers are supported


if (window.Worker) {
	// Starting doing stuff here
}


// This is the main.js file which calls and interacts with worker
var worker = new Worker('./script.js');

$(".some-input").click(function (e) {
	worker.postMessage([{message: 'some-input was clicked'}]);
});


// Let's go to worker script

onmessage = function (e) {
	var results = e.data[0].message;
	var processed = processResult(results);
	postMessage(processed);
};


// Again main.js file
worker.onmessage = function (e) {
	console.log('Worker sent processed data:', e.data);
};

// Task: Read up on shared workers yourselves
// They use ports to identify different scripts
