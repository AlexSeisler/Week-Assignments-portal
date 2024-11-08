/*This is a RPS mock up game which interact with the user through displaying the computer as an oppenent
*/

//Randomly chosen computer input
function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}
//Functions to get user input
function getHumanChoice()
{
    let human = "";
    while(true)
    {
        human = prompt("What is your attack(rock, paper or scissors)");
        human = human.toLowerCase();
        if(human == "rock" ||human == "paper" ||human == "scissors")
        {
            return human;
        }
        else
        {
            console.log("Invalid Option, try again");
        }
    }
}

//Initilizing scores
var playerScore = 0;
var computerScore = 0;
var turn = 0;

//Takes in the two chosen actions and updates the score and sentence outputs
function playRound(human, computer)
{
    var final = false;
    const movesList = document.getElementById("moves-list");
    const scorePlayer = document.getElementById("resultPlayer");
    const scoreComputer = document.getElementById("resultComputer");
    const gameResult = document.getElementById("GameResult");
    const rpsDatabase = 
    {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    //updates score using rps Database
    playerScore += rpsDatabase[human][computer];
    computerScore += rpsDatabase[computer][human];
    turn++;


    if(rpsDatabase[human][computer] == 1)
    {
        gameResult.textContent =(`You win!, ${human} beats ${computer}`);
    }
    else if(rpsDatabase[human][computer] == .5)
    {
        gameResult.textContent =(`It's a Draw!, ${human} ties with ${computer}`);
    }
    else if(rpsDatabase[human][computer] == 0)
    {
        gameResult.textContent =(`You Lose!, ${human} loses to ${computer}`);
    }

    

    //If statments checking for a player reaching a score of 5
    if(playerScore>=5)
    {
        document.body.innerHTML = '';
        const end = document.createElement("p");
        end.innerText = "You Win!";
        end.style.cssText = 'display:flex; justify-content:center; align-items:center; color: red; font-size:200px;';
        document.body.appendChild(end);
        final = true;
    }
    if(computerScore>=5)
    {
        document.body.innerHTML = '';
        const end = document.createElement("p");
        end.innerText = "Computer Wins!";
        end.style.cssText = 'display:flex; justify-content:center; align-items:center; color: red; font-size:200px;';
        document.body.appendChild(end);
        final = true;
    }

    //Updates the html scores and actions
    if(final)
    {
        return;
    }
    else
    {
        scorePlayer.textContent = (playerScore);
        scoreComputer.textContent = (computerScore);
        Hactions.textContent = ("Players Action - "+human);
        Cactions.textContent = ("Computers Action - "+computer);
        movesList.innerHTML += (`${turn}. You - ${human}, Computer - ${computer}<br>`);
        return;
    }
    
}


