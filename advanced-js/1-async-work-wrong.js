// WHat is wrong with this?

var fs = require('fs');
var requests = require('requests');

var data = fs.readdir("./some-path");

var body = requests.get("https://google.com");
