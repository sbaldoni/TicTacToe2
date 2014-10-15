function TTTController($scope) {

	$scope.rows = [['','',''],['','',''],['','','']];
	function maxMoves() {
		for (var moves=0; moves < 10; moves++)
			if (moves < 9) {
				playerSwitch();
			} else {
				$scope.gameOver = "Game Over";
			}
	}
	
	$scope.makeMove = function(c, d) {
	if (player === 0) {
		$scope.rows[c][d] = 'X';
		maxMoves();
	} else {
		$scope.rows[c][d] = 'O';
		maxMoves();
}
  	console.log(c, d);
};
	var player = 0;
	function playerSwitch() {
		if (player === 0) {
			$scope.playerTurn = "Player 1";
			player++;
		
		} else if (player == 1) {
			$scope.playerTurn = "Player 2";
			player--;
			
		}
	}

	function newGame() {
		
	}
}