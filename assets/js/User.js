
var User = function (name,pass) {
	this.name = name;
	this.pass = pass;
	this.age;
	this.note=[];
}


User.getUserByName = function(name){

	for(var i=0;i<listUsers.length;i++){
		currentUser = listUsers[i];
		if(currentUser.name == name){
			return currentUser;
		}
	}
	return false;
}

User.prototype.connect = function(){

	var current_user = User.getUserByName(this.name);

	if(current_user!= false){
		if(current_user.pass==this.pass){
			this.age=current_user.age;
			this.note=current_user.note;
			return true;
		}
		else {return false;}
	}
	else {return false;}
}

User.prototype.newnote = function(newnote){

	if(follownote===0){
		this.note.push(newnote);
	}
	else {
		var tabnote=(follownote-1);
		this.note[tabnote]=newnote;
	}
}


