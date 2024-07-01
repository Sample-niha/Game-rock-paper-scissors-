let userScore = 0;
let compScore= 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");
const genCompChoice = () =>
    {
    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random() * 3);
    return options[random];
    };

    const drawGame = () =>
        {
            msg.innerText= "game was draw,play again";
            msg.style.backgroundColor="#081b31";
        };
    const showWinner = (userWin,userChoice,compChoice) =>
        {
            if(userWin)
                {
                    userScore++;
                    user_Score.innerText=userScore;
                    msg.innerText = `you won your ${userChoice} beats computer ${compChoice}`;
                    msg.style.backgroundColor = "green";
                }
            else{
               compScore++;
               comp_Score.innerText=compScore;
                msg.innerText=`you lose computer ${compChoice} beats your ${userChoice}`;
                msg.style.backgroundColor="red";
            }
        }

 const playGame = (userChoice) =>
    {
        console.log(`user choice is ${userChoice}`);
       const compChoice = genCompChoice();
       console.log(`comp choice is ${compChoice}`);

       if(userChoice === compChoice)
        {
            //draw game
            drawGame();
        }
        else {
            let userWin = true;
            if(userChoice === "rock")
                {
                    userWin = compChoice === "paper" ? false : true; 
                }
            else if ( userChoice === "paper")
                {
                    userWin = compChoice === "scissors" ? false : true;
                }
            else
                {
                    userWin = compChoice === "rock" ? false : true;
                }
        showWinner(userWin,userChoice,compChoice);  
        }
        
    };



choices.forEach((choice) =>
   {
     choice.addEventListener("click",() => {
     const userChoice = choice.getAttribute("id");
    playGame(userChoice);

   });
});
