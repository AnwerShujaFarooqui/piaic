//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0512         -->
//<!-- Doc id #      : index0512.js       -->

//<!-- Notes         :  Program : Guess The Number -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Guess The Number

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------
        document.writeln('<h2>');
        //document.writeln("<<<  Guess The Number  >>>");

//--------------------------------------------------------------------------------------------------


var randomNum = Math.floor(Math.random() * 100 + 1);
var playAgain;
var counter = 0;

console.log("Number to Check >>> " + randomNum);        // Lets Guess

function numGame() {
        var userInput = prompt("Guess a number between 1 to 100");      //Input a Number to check
        var i = 0;

        do {                                                            // Do While Loop to Check
                if (userInput === randomNum) {
                        alert("You are right, You won");                // Guess Correct Check
                        play_Again();
                        break
                }
                else alert("Incorrect, Please try again");              // // Guess InCorrect Warning
                userInput = prompt("Guess a number between 1 to 100");
                counter++;
                i++
                if (counter === 2)
                        play_Again();
        } while (i < 2);
}

function play_Again() {
        counter = 0;
        alert("you Lose");
        playAgain = prompt("Do you want to play again? Yes / no")
        if (playAgain.toLowerCase() === "yes")
                numGame();

        else if (playAgain.toLowerCase() === "no")
                alert("thanks for playing")
}

numGame();



//====================================================================================================

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
