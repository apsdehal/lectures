var SDSGroup = {
	title: '',
	members: [],
	_checkIfMember: function (member) {
		// Some logic here
		// Private function
	},
	setMembers: function (members) {
		this.members = members;
	},
	getMembers: function (member) {
		return this.members;
	}
};


// Singleton pattern
SDSGroup.setMembers(["kd", "shah"]);
console.log(SDSGroup.getMembers());
