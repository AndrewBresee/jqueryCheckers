$(document).ready(function() {
	console.log("READY!");

	var $space = $('.white 12');
	var pieceOne = "<div>HI!</div>";

  var html = $.parseHTML(pieceOne), 
	// Append the parsed HTML
	$space.append( html );

	$('.white').click(function(item){
		console.log("WHITE CLICKED!: ", item.delegateTarget)
	})

	$('.black').click(function(item){
		console.log("BLACK CLICKED!: ", item.delegateTarget)
	})
});