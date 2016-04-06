// Learn why they are important here
//
// Apply and Call change the context and call immediately

// Context

var getString = function (a, b) {
	console.log(
		'The final string is' + ' '  +
		a +  ' ' +
		this.val +  ' ' +
		b);
}


function maClass (a, b) {
	this.val = a;
	this.b = b;
	this.a = a;
};

// Normal call
// Should have undefined val
getString('yo', 'lo');

var maObject = new maClass('hi', 'b');

// Call
// Calls a function with a given 'this' value
// and arguments provided individually

getString.call(maObject, 'yo', 'lo');

// Apply
// Calls a function with a given 'this' value
// and arguments passed as an array object

getString.apply(maObject, ['yo', 'lo']);

// Bind
// Creates a new function that, when called,
// has its 'this' keyword set to the
//  provided value, with a given sequence of
//  arguments preceding any provided
//  when the new function was called.
// Support: ECMAScript >= 5 (thus >= IE9)


var getNewString = getString.bind(maObject);
getNewString();

// Naive implementation of bind
Function.prototype.bind = function(context) {
    var fn = this;
    return function() {
        fn.apply(context, arguments);
    };
};


getNewString('yo', 'lo');
