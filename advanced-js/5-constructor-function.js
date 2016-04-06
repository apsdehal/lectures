// Explains how constructor functions work


// Create an object type var
var newObject = new Object();

// Date type
var time = new Date();

// Creates a group
var group = new Group();

function Group(name, type) {
	this.name = name;
	this.type = type;
	this.restArgsArray = arguments.slice(2);
	// Learn arguments also while you are here :p
}

group instanceof Group; // Check for instance
