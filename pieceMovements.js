$(document).ready(function() {
	console.log("READY!");

// 	var $space = $('.white 12');
// 	var pieceOne = "<div>HI!</div>";

//   var html = $.parseHTML(pieceOne);
// // Append the parsed HTML


var selectedPiece; 
var piecesSpace; 
var selectedSpace; 

// this will go back and forth. true = red's turn. false = black's turn. 
var turn = true;

	$('td').click(function(e){

		// finds the class of the selected item
		// will be useful for when deciding if piece can be moved around 

		// this gives the number of the space
		selectedSpace = $(this).attr('class').split(' ')[1];


		// this checks if the space that was clicked has a piece in it
		if (this.children.length > 0) {
			selectedPiece = this.children[0];
			//sets the piecesSpace so that it can be compared to selected space
			piecesSpace = $(selectedPiece).parent()[0];
			piecesSpace = $(piecesSpace).attr('class').split(' ')[1]; 
		} 


		// checks if it is red's turn
		if (turn) {
			if ($(selectedPiece).attr('class').split(' ')[0] === 'redP') {
				// if the selectedPieces SPACE - selectedSpace is = 10, then it can move. 
				if (selectedSpace - piecesSpace  === 10) {
					$(this).append(selectedPiece);
					console.log("Moved")
					// changes turn 
					turn = false; 
				}
			}
		} else {
			if ($(selectedPiece).attr('class').split(' ')[0] === 'blackP') {
				console.log("Selected black piece to move")
				if (piecesSpace - selectedSpace === 10) {
					$(this).append(selectedPiece);
					console.log("Moved")
					// changes turn 
					turn = true;
				} 
			}
		}



		// appends the proper turn name
		if (turn) {
			$('.playersTurn').empty().append('Red go\'s!')
		} else {
			$('.playersTurn').empty().append('Black go\'s!')
		}


		console.log("this :", this); 
		console.log("selectedPiece :", selectedPiece);
		console.log("selectedSpace :", selectedSpace); 
	})
});