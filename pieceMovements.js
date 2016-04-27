$(document).ready(function() {
	console.log("READY!");

	$('.white').click(function(item){
		console.log("WHITE CLICKED!: ", item.delegateTarget)
	})

	$('.black').click(function(item){
		console.log("BLACK CLICKED!: ", item.delegateTarget)
	})
});