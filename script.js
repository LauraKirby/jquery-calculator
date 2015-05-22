$( document ).ready(function() {

	
var count = 0; 
var x; 
var y; 
var op; 

	$("span").on("click", function(){
		
		var text = $(this).text();
		$("#screen").html(text);

			count += 1; 
			console.log("the click count number is " + count); 
			if (count === 1){
				x = parseInt(text);
				console.log(x + " was clicked");  
			}
			else if (count === 2) {
				op = text; 
				console.log(text + " was clicked"); 
			}
			else if (count === 3){
				y = parseInt(text); 
				console.log(y + " was clicked"); 
			}
			else if (count === 4 && text === "=") {
					//console.log("the sum is "+ (x + y));
					var sum = x + y; 
					$("#screen").html(sum);
					console.log ("the sum is " + (x + y)); 
					//return ("the sum is " + (x + y)); 
				}
	}); 		
})


