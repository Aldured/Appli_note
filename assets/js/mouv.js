//charge jquery
$(document).ready(function(){

	$(document).on("mouseenter", ".bar",function(){

		$(this).append("<button class=\"mouv\" id=\"uplist\"><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button><button class=\"mouv\" id=\"downlist\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button><button class=\"mouv\" id=\"eraseoflist\"><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i></button>");

	});

	$(document).on("mouseleave", ".bar",function(){

		$(this).children(".mouv").remove();

	});

	$(document).on("click", "#uplist",function(event){
		event.preventDefault();

		follownote=(parseInt($(this).siblings(".notelist").attr('id'))+1);
		newUser.upnote();
		list();

	});

	$(document).on("click", "#downlist",function(event){
		event.preventDefault();

		follownote=(parseInt($(this).siblings(".notelist").attr('id'))+1);
		newUser.downnote();
		list();

	});

	$(document).on("click", "#eraseoflist",function(event){
		event.preventDefault();

		follownote=(parseInt($(this).siblings(".notelist").attr('id'))+1);
		newUser.erasenote();
		list();

	});









});//fin jquery