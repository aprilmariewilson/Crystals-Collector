
$(document).ready( function() {

	// variables...


var gems = [];
var imageGem = '';
var counter = 0;
var complete = false;
//var targetOptions = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var increment = Math.floor((Math.random() * 12) + 1);
var targetNumber = Math.floor((Math.random() * 120) + 19);
var wins = 0;
var loss = 0;


// reset function
function resetGame(){
	var gems = [];
var imageGem = '';
var counter = 0;
var complete = false;
}

//target number...
$("#goal").text(targetNumber);






// gem values...

for (var i = 0; i < numberOptions.length; i++) {

	var imageGem = $("<img>");

	imageGem.addClass("gem-image");

	imageGem.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

	imageGem.attr("data-gemvalue", numberOptions[i]);

	$("#gem1, #gem2, #gem3, #gem4").append(imageGem);

};




// play game
$(".gem-image").on("click", function() {
	
	var gemValue = ($(this).attr("data-gemvalue"));
	gemValue = parseInt(gemValue);
	counter += gemValue;
	$("#totalscore").text('Total Score: ' + counter);

	alert("New score: " + counter);
	if (counter === targetNumber) {
		alert("You win!");
	}
	else if (counter >= targetNumber) {
		alert("You lose!!");
	}
});


	


}); //end of document ready
