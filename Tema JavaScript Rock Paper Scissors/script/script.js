var arr = ["rock", "paper", "scissors"];

var x = Math.floor(Math.random() * 3);	
var y = Math.floor(Math.random() * 3);

function play(a) {
	if ( a == 0) {
		return arr[0];
	} else if (a == 1) {
		return arr[1];
	} else return arr[2];
}
	
var player = play(x);
var computer = play(y);

console.log("Player picked:",play(x),"|","Computer picked:",play(y));

if ( play(x) == play(y) ) {
	console.log("It's a tie!");
} else {
	switch(play(x)){
		case arr[0]:
			if ( play(y) != arr[1] ) {
				console.log("Player wins!");
			}
			else {	
				console.log("Computer wins!");
			}
			break;

		case arr[1]:
			if ( play(y) == arr[0] ) {
				console.log("Player wins!");
			}
			else {	
				console.log("Computer wins!");
			}
			break;
    default:
		case arr[2]:
			if ( play(y) == arr[1] ) {
				console.log("Player wins!");
			}
			else {	
				console.log("Computer wins!");
			}
			break;
	}
}
