$(document).ready(function() {
	console.log("READY!");

// 	var $space = $('.white 12');
// 	var pieceOne = "<div>HI!</div>";

//   var html = $.parseHTML(pieceOne);
// // Append the parsed HTML

	


	$('.white').click(function(){
		console.log(this)
		$("<p>Test</p>").appendTo(this);
	
	})

	$('.black').click(function(){
		console.log(this)
	})
});