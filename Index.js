const buttons = document.querySelectorAll('.square');
buttons.forEach(button => button.addEventListener('click', MakeMove));

const playAgain = document.querySelectorAll('.option');
playAgain.forEach(button => button.addEventListener('click', ResetBoard));

const turnText = document.querySelector('.rule');

let player = "X";
let turnCounter = 0;
let winner = "";

function MakeMove(button){
    const clickedButtonId = button.target.id;
    const UpdateButton = document.getElementById(clickedButtonId);
    UpdateButton.textContent = player;
    ChangePlayer();
    if(turnCounter >= 5){
        CheckForWin();
    }
    if( winner != ""){
        buttons.forEach(button => button.removeEventListener('click', MakeMove));
        console.log("Win");
        turn.textContent = winner;
        turnText.textContent = '\xa0Wins!';
    }
    UpdateButton.removeEventListener('click', MakeMove);
}

const turn = document.querySelector('.turn');
function ChangePlayer(){
    if(player == "X"){
        SetPlayer("O");
    }
    else{
        SetPlayer("X");
    }
    turnCounter++;
}

function SetPlayer(newPlayer){
    player = newPlayer;
    turn.textContent = newPlayer;
}

function CheckForWin(){
    // vertical
    for(let i = 1; i <= 3; i++){
        const value1 = document.getElementById(i).textContent;
        const value2 = document.getElementById(i + 3).textContent;
        const value3 = document.getElementById(i + 6).textContent;
        if(value1 == value2 && value1 == value3){
            winner = value1
            return;
        }
    }
    // horizontal
    for(let i = 1; i <= 3; i+=3){
        const value1 = document.getElementById(i).textContent;
        const value2 = document.getElementById(i + 1).textContent;
        const value3 = document.getElementById(i + 2).textContent;
        if(value1 == value2 && value1 == value3){
            winner = value1
            return;
        }
    }
    // diagonals
    let value1 = document.getElementById(1).textContent;
    let value2 = document.getElementById(5).textContent;
    let value3 = document.getElementById(9).textContent;
    if(value1 == value2 && value1 == value3){
        winner = value1
            return;
    }
    value1 = document.getElementById(3).textContent;
    value3 = document.getElementById(6).textContent;
    if(value1 == value2 && value1 == value3){
        winner = value1
            return;
    }
}

function ResetBoard(button){
    buttons.forEach(button => button.addEventListener('click', MakeMove));
    buttons.forEach(button => button.textContent = "");
    SetPlayer("X");
    turnText.textContent = "\'s turn"
}