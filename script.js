let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#computer-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    //console.log("draw");
    msg.innerText="Game was Draw. Play again!";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user_score.innerText=userScore;
        //console.log("you win");
        msg.innerText=`You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        comp_score.innerText=computerScore;
        //console.log("you lose");
        msg.innerText=`You Lost! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //user choice
    console.log("userChoice=",userChoice);
    //computer choice
    const compChoice=genComputerChoice();
    console.log("computer choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});