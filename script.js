const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.result');
const playAgain = document.querySelector('.play-again');
const endText = document.querySelector('.end-text');
const modal = document.querySelector('.end');
let playerLives = 5;
let computerLives = 5;

function computerPlay() {
    const options = ['rock', 'paper', 'scissor'];
    const computer = options[Math.floor(Math.random() * options.length)];
    console.log("🚀 :: computer", computer);
    return computer;
}

function resetGame() {
    playAgain.addEventListener('click', () => {
        window.location.reload();
    });
}
//! the flow is running twice here! 
function checkWin(player, computer) {
    debugger;
    if (player === computer) {
        result.textContent = "Its a Tie,No crew members were lost";
    } else if ((computer === 'rock' && player === 'paper') || (computer === 'paper' && player === 'scissor') || (computer === 'scissor' && player === 'rock')) {
        result.textContent = "Yay! You won ,you got a crew member ";
        computerLives -= 1;
        console.log("🚀 :: computerLives", computerLives);
    } else {
        result.textContent = "Play safe ,You lost a crew member";
        playerLives -= 1;
        console.log("🚀 :: playerLives", playerLives);
    }
    const stat = document.querySelector('.stats');
    stat.textContent = `Your crew ${playerLives} | Foxy Pirates ${computerLives}`

}

function endGame(pl, cl) {
    if (pl == 0 || cl == 0) {
        if (pl > cl) {
            result.textContent = "Foxy Pirates Lost ,They don't have anymore Lives";
            endText.textContent = "You Won this Fight";
        } else {
            result.textContent = "They Won You don't have anymore cre left :(";
            endText.textContent = "You Lost this Fight";
        }
        modal.style.display = "flex";
    }
}

function playGame() {
    let player;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('rock')) {
                player = 'rock';
            } else if (button.classList.contains('scissor')) {
                player = 'scissor';
            } else {
                player = 'paper';
            }
            console.log('🚀 sel player::', player);
            checkWin(player, computerPlay());
            endGame(playerLives, computerLives);
            resetGame();
        });
    });
}
playGame();