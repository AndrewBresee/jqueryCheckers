$(document).ready(function() {
	console.log("READY!");

// 	var $space = $('.white 12');
// 	var pieceOne = "<div>HI!</div>";

//   var html = $.parseHTML(pieceOne);
// // Append the parsed HTML

var selectedPiece; 
var piecesSpace; 
var selectedSpace; 


	$('td').click(function(){
		// finds the class of the selected item
		// will be useful for when deciding if piece can be moved around 
		selectedSpace = $(this).attr('class').split(' ')[1];


		// want to check if the selectedPiece can move to the selectedSpace. 
		// if the selectedPieces SPACE - selectedSpace is = 10, then it can move. 

		if (this.children.length > 0) {
			selectedPiece = this.children[0];
			//sets the pieceSpace so that it can be compared to selected space
			piecesSpace = $(selectedPiece).parent()[0];
			piecesSpace = $(piecesSpace).attr('class').split(' ')[1]; 
		} 
		console.log("this :", this); 
		console.log("selectedPiece :", selectedPiece); 
	})
});