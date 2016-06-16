
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
		var tabnote=parseInt(follownote)-1;
		this.note[tabnote]=newnote;
	}
}

User.prototype.erasenote = function(){

	var tabnote=parseInt(follownote)-1;
	newUser.note.splice(tabnote,1);

}

User.prototype.upnote = function(){

	if(follownote>1){
		var tabnote=parseInt(follownote)-1;
		var prevnote=tabnote-1
		newUser.note.push(newUser.note[tabnote]);
		var lastindex=(newUser.note.length-1) ;
		newUser.note[tabnote]=newUser.note[prevnote];
		newUser.note[prevnote]=newUser.note[lastindex];
		newUser.note.pop();
	}
}

User.prototype.downnote = function(){

	var lastindex=(newUser.note.length) ;
	if(follownote<lastindex){
		var tabnote=parseInt(follownote)-1;
		var nextnote=tabnote+1
		newUser.note.push(newUser.note[tabnote]);
		lastindex=(newUser.note.length-1) ;
		newUser.note[tabnote]=newUser.note[nextnote];
		newUser.note[nextnote]=newUser.note[lastindex];
		newUser.note.pop();
	}
}

