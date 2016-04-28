$(document).ready(function() {
	console.log("READY!");

// 	var $space = $('.white 12');
// 	var pieceOne = "<div>HI!</div>";

//   var html = $.parseHTML(pieceOne);
// // Append the parsed HTML

var selectedPiece; 


	$('.white').click(function(){
		if (this.children.length > 0) {
			selectedPiece = this.children[0];  
		} 
		console.log("this :", this); 
		console.log("selectedPiece :", selectedPiece); 
	})

	$('.black').click(function(){
		console.log(this)
	})
});