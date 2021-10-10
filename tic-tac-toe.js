window.onload = event =>{
    TTT();
}


function TTT(){
	let currentPlayer = "X"
	let restart = document.getElementsByClassName('btn')[0];
	//let elem = document.querySelectorAll("#board div");
	let board = document.getElementById('board');
	let status = document.getElementById('status');
    let elem = board.getElementsByTagName('div');
	let playerPlays = new Array(9); 
    //let ender = 'O';
    let isGameEnd = false;
	
	for (let i=0; i < elem.length; i++){
		elem[i].classList.add("square");
		elem[i].addEventListener('click', function(){
			console.log('Square' + i + "clicked");
			elem[i].innerHTML = currentPlayer;
			if (elem[i].innerHTML === 'X'){
				elem[i].innerHTML.classList.add("X")
			}
			else if(elem[i].innerHTML === 'O') {
				elem[i].innerHTML.classList.add("O")
			}
			changePlayer();

			});

		/*elem.onmouseover = event =>{
            if(!isGameEnd){
                event.target.classList.add('hover');
            }
        };

        elem.onmouseleave = event =>{
            event.target.classList.remove('hover');
        };
		*/
		/*elem.onclick = (event)=>{

            if (playerPlays[event.target.id] || isGameEnd){
                return;
            }

            if (currentPlayer === 'X'){
                event.target.innerText = 'O';
                event.target.classList.add('O');
                playerPlays[event.target.id] = 'O';
                currentPlayer = 'O';
            }
            else if (ender === 'O'){
                event.target.innerText = 'X';
                event.target.classList.add('X');
                playerPlays[event.target.id] = 'X';
                currentPlayer = 'X';
            }
    	}*/
    }

/*	var statusDisplay = document.querySelector("#status");
	let gameActive = true;

	let gameState = ["", "","", "", "", "","", "", ""];
	const winningMessage = () => `Player ${currentPlayer} has won!`;
	const clickBox = elem.target;
	const drawMessage = () => `Game ended in a draw!`;
	const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
	statusDisplay.innerHTML = currentPlayerTurn();
*/
/*	function handleCellPlayed(){

	}

	function changePlayer(){
		
	}
	function handleResultValidation(){

	}
	function handleCellClick(){

	}
*/
	/*document.querySelectorAll('clickBox').forEach(clickBox => clickBox.addEventListener('click', handleCellClick));
	document.querySelector('.btn').addEventListener('click', handleRestartGame);
	*/

	function changePlayer(){
		currentPlayer = currentPlayer ==="X" ? "O" : "X";
		//statusDisplay.innerHTML = currentPlayerTurn();
		status.innerHTML = `${currentPlayer}'s turn`
	}

	restart.onclick = event =>{
        playerPlays = new Array(9);
        isGameEnd = false;
        
        //status.classList.remove('you-won');
        status.innerText = 'Move the mouse over a square then click to play a X or an O.';

        currentPlayer = 'X';

        for (let ele of elem){
            //elem.classList.remove('X');
            //elem.classList.remove('O');
            ele.innerText = '';
        }

    };
	
/*	function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
      clickedCell.getElementById("clickBox").children
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }    
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

	function handleCellPlayed(clickedCell, clickedCellIndex) {
    	gameState[clickedCellIndex] = currentPlayer;
    	clickedCell.innerHTML = currentPlayer;
	}

	const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
	function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

/*	function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('clickBox')
               .forEach( => clickBox.innerHTML = "");
	
	}
*/

}
