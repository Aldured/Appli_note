var newUser;
var follownote=0;

//charge jquery
$(document).ready(function(){

	$('#listnote').removeClass().addClass("cache");
	$('#note').removeClass().addClass("cache");
	$('#connect').removeClass().addClass("visible");

	$('#btnconnect').click(function(event){
		event.preventDefault();

		var login=$('#userconnect').val();
		var password=$('#passconnect').val();

		newUser= new User (login,password);
		var validconnect=newUser.connect();

		if (validconnect==false){
			alert("Nom d'utilisateur ou mot de passe incorect");

		}
		else{
			$('.titlelistnote').html("Bonjour et bienvenue Depositaire "+newUser.name);
			$('#connect').removeClass().addClass("cache");
			$('#listnote').removeClass().addClass("visible");

			list();
		}

	}); //fin de fonction click

	$(document).on("click", ".notelist",function(event){
		event.preventDefault();

			follownote=(parseInt($(this).attr('id'))+1)
			$('#titlenote').val(newUser.note[$(this).attr('id')][0]);
			$('#textnote').val(newUser.note[$(this).attr('id')][1]);
			$('#listnote').removeClass().addClass("cache");
			$('#note').removeClass().addClass("visible");

	}); //fin de fonction click

	$('#viewnote').click(function(event){
		event.preventDefault();

			follownote=0;
			$('#titlenote').val('');
			$('#textnote').val('');
			$('#listnote').removeClass().addClass("cache");
			$('#note').removeClass().addClass("visible");

	}); //fin de fonction click

	$('#deconnect').click(function(event){
		event.preventDefault();

			newUser=new User('', '');
			$('#passconnect').val('');
			$('#listnote').removeClass().addClass("cache");
			$('#connect').removeClass().addClass("visible");

	}); //fin de fonction click

	$('#validnote').click(function(event){
		event.preventDefault();


			var curentnote=[];
			var titrenote=$('#titlenote').val();
			var textnote=$('#textnote').val();
			curentnote.push(titrenote);
			curentnote.push(textnote);

			newUser.newnote(curentnote);

			list();

			$('#note').removeClass().addClass("cache");
			$('#listnote').removeClass().addClass("visible");


	}); //fin de fonction click

	$('#erasenote').click(function(event){
		event.preventDefault();

			if(follownote>0){
				newUser.erasenote();
			}

			list();

			$('#note').removeClass().addClass("cache");
			$('#listnote').removeClass().addClass("visible");


	}); //fin de fonction click

	$( window ).unload(function() {
		var strUsers=JSON.stringify(listUsers);
		localStorage.setItem("BddUsers",strUsers);
	});

});//fin jquery



function list (){
	$('#affichlistnote').children().remove();

	for(var i=0;i<newUser.note.length;i++){

		if (newUser.note[i]===null){
			newUser.note.splice(i,1);
			i--;
		}
		else{
			$('#affichlistnote').append("<li> <div class=\"bar\"><button class='notelist' id='"+i+"'>"+newUser.note[i][0]+"</button></div></li>");
		}
	}
}