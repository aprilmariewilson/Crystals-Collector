
$(document).ready(function () {

	// variables...

	var gemValue = {};
	gemValue[1] = Math.floor(Math.random() * 12 + 1);
	gemValue[2] = Math.floor(Math.random() * 12 + 1);
	gemValue[3] = Math.floor(Math.random() * 12 + 1);
	gemValue[4] = Math.floor(Math.random() * 12 + 1);
	var counter = 0;
	var targetNumber = Math.floor(Math.random() * 102 + 19);
	var wins = 0;
	var loss = 0;
	$('#win').text(wins);
	$('#loss').text(loss);

	// reset function
	function resetGame() {
		targetNumber = Math.floor(Math.random() * 102 + 19);
		gemValue[1] = Math.floor(Math.random() * 12 + 1);
		gemValue[2] = Math.floor(Math.random() * 12 + 1);
		gemValue[3] = Math.floor(Math.random() * 12 + 1);
		gemValue[4] = Math.floor(Math.random() * 12 + 1);
		counter = 0;
		$('#counter').text(counter);
		$('#goal').text(targetNumber);

	}
	$.wait = function( callback, seconds){
		return window.setTimeout( callback, 1 * 1000 );
 }


	//target number...
	$("#goal").text(targetNumber);



	//create gem variables
	// gem values...
	$('#gem1').on('click', getGemHandler(1)); 
	$('#gem2').on('click', getGemHandler(2));
	$('#gem3').on('click', getGemHandler(3));
	$('#gem4').on('click', getGemHandler(4));

	//you win function...
function winner(){
	
	wins++;
 $('#win').text(wins);
	$('#counter').text(counter);
	$("#counter").delay(1000).fadeIn('You Win!!');
	resetGame();
	
}
// you lose function...
function loser(){	
	
	loss++;
	$('#loss').text(loss);
	$('#counter').text(counter);
	$("#counter").delay(1000).fadeIn('You Lose!!');
	resetGame();
	
}



	//game function...
	function getGemHandler(gemKey) {
		return function () {
			counter = counter + gemValue[gemKey];
			$('#counter').text(counter);
			console.log(counter);
			if (counter === targetNumber) {
				winner()
			}
			else if (counter > targetNumber) {
				loser()
			}
		}

	}
	// for (var i = 0; i < numberOptions.length; i++) {

	// 	var imageGem = $("<img>");

	// 	imageGem.addClass("gem-image");

	// 	imageGem.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

	// 	imageGem.attr("data-gemvalue", numberOptions[i]);

	// 	$("#gem1, #gem2, #gem3, #gem4").append(imageGem);

	// };




	// // play game
	// $(".gem-image").on("click", function() {

	// 	var gemValue = ($(this).attr("data-gemvalue"));
	// 	gemValue = parseInt(gemValue);
	// 	counter += gemValue;
	// 	$("#counter").text('Total Score: ' + counter);

	// 	alert("New score: " + counter);
	// 	if (counter === targetNumber) {
	// 		alert("You win!");
	// 	}
	// 	else if (counter >= targetNumber) {
	// 		alert("You lose!!");
	// 	}
	// });





}); //end of document ready
