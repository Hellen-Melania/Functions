//GAME --> Guess number

function main(){	
	if (!confirm("Do you want to start the game?")) {
		console.log('Today you have not won a million, but you could.');
		return;
	}
	
	// init
	var prize = 0, n = 5, multiply = 1;

	while(true){
		var lastPrize = checkAttempt(game(n), multiply);
		prize += lastPrize;

		if(lastPrize){
			console.log("You are win!");
			if(confirm("Do you want to continue the game?")){
				n *= 2;
				multiply *=3;
			} else {
				console.log("Thank you for that game.\n Your prize is $" + prize);
				return;
			}
		} else {
			console.log("You loose.\n Your prize is $0");
			return;
		}
	}

	function game(n){
		var randomNumber = parseInt(Math.random() * n, 10 );	
				
		function checkNums(){
			console.log('random ' + randomNumber);
			return num == randomNumber;
	   }; 		

		for(var i = 1; i < 4; i++){
			var num = prompt('Please, enter the number between 0 and ' + n);
			if (checkNums()){
				return i;
			};
		}
		return false;
	}

	function checkAttempt(attempt, multiply){
		switch(attempt){
			case 1: 
				alert("You win $" + 10 * multiply);
				return 10 * multiply;
			case 2: 
				alert("You win $" + 5 * multiply);
				return 5 * multiply;
			case 3: 
				alert("You win $" + 2 * multiply);
				return 2 * multiply;
			default: 
				alert("You have not won.\n Game Over.");
				return false;
		}
	}		
}
main();