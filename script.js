let userScore = 0;
let comScore = 0;
const userScore2 = document.querySelector("#user-score");
const comScore2 = document.querySelector("#system-score")
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const resetgame = document.querySelector("#resetgame");

const genComChoice = () =>{
    let option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};
const resetGame = () => {
    userScore = 0;
    comScore = 0;
    userScore2.innerText = userScore;
    comScore2.innerText = comScore;
    msg.innerText = "Let's play a new game!";
    msg.style.backgroundColor = "#081b31";
};
const drawGame = () =>{
    msg.innerText = "Game Was Draw. Play again. ";
    msg.style.backgroundColor = "#081b31"; 
    console.log("Game was Draw ");
}

const showWinner= (userWin, userchoice, comChoic) =>{
    if(userWin){
        userScore++;
        userScore2.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beast ${comChoic}`;
        msg.style.backgroundColor = "green";  
       

    }else{
        comScore++;
        comScore2.innerText = comScore;
        msg.innerText = `You lost. ${comChoic} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red"; 
    }
};

const playgame = (userchoice) =>{
    
    // generate computer choice 
    const comChoic  = genComChoice();
    
    if(userchoice === comChoic){
        //draw
        drawGame();
    } else{
        let userWin = true;
        if(userchoice === "rock"){
            //sicssors ,paper
            userWin = comChoic === "paper" ? false : true;
        } else if (userchoice === "paper"){
            // rock , scissors left
            userWin = comChoic === "scissors" ? false : true;
        }else{
            // rock ,paper compuer choice left
            userWin = comChoic === "rock" ? false : true;
        }
        showWinner(userWin,userchoice, comChoic);
    }

};


choices.forEach((choice) =>{
    
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was click",userchoice);
        playgame(userchoice);
    })
});

resetgame.addEventListener("click", resetGame);