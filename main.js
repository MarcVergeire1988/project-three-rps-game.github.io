const choices = ["Rock", "Paper", "Scissors"];
                        // 
const  playerDisplay = document.getElementById("playerDisplay");
const  computerDisplay = document.getElementById("computerDisplay");
                       // 
const  resultDisplay = document.getElementById("resultDisplay");
                      //   
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
                     // 
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if(playerChoice === computerChoice){
        result = "It's a TIE!"
    }
    else{
        switch(playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You WIN!": "You LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You WIN!": "You LOSE!";
                break;
             case "Scissors":
                    result = (computerChoice === "Paper") ? "You WIN!": "You LOSE!";
                    break;
        }
    }
                            // 
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
                            // 
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText", "whiteText");

    switch(result){
        case "You WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a TIE!":
            resultDisplay.classList.add("whiteText");
            break;
    }
}