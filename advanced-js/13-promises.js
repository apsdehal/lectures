// For asynchronous computations use Promise

var promise = new Promise(function(resolve, reject) {
  // do something, async maybe, then

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");  // You can pass other params here
  }
  else {
  	// Reject otherwise
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});

// Nodejs version > 0.11
