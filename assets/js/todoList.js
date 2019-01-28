$("ul").on("click", "li", function() {
	$(this).toggleClass("clicked");
});

//click on x to delete todo 
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//Add new todos 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){	
		//grabbing new todo text from input
		var txt = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + txt + "</li>")
	}
});

$(".fa-pencil").click(function() {
	$("input").fadeToggle(0.5);
});
