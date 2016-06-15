var listUsers;
var listbdd=localStorage.getItem("BddUsers");

if(listbdd===null){

	var listUsersafe = [
		{
			name:"Pierre",
			pass:"admin",
			age:"24",
			note : []
		},
		{
			name:"Damien",
			pass:"222",
			age:"24",
			note : []
		},
		{
			name:"Mathieu",
			pass:"333",
			age:"24",
			note : []
		},
		{
			name:"Manu",
			pass:"444",
			age:"24",
			note : []
		},
	];

	listUsers=listUsersafe;
}
else {
	listUsers=JSON.parse(listbdd);
}


