// Prototype can be used to add methods and properties to
// objects, even the one already initiated because the all inherit
// same prototype

function SDSGroup(name, members) {
	this.name = name;
	this.members = members || [];
}

var mdg = new SDSGroup('MDG');

SDSGroup.prototype.spitMembers = function () {
	this.members.map(function (x) {
		console.log(x);
	});
}

SDSGroup.prototype.addMember = function (member) {
	member = Array.isArray(member) ? member : [member];
	this.members = this.members.concat(member);
}

SDSGroup.prototype.removeMember = function (member) {
	var index = this.members.indexOf(members);
	if (index > -1) {
		this.members.splice(index, 1);
	}
}
// Even though functions to prototype were added later
// they are inherited by already created objects
mdg.addMember(['kd', 'shah']);
mdg.spitMembers();
