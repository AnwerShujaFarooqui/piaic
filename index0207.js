//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 07             -->
//<!-- Doc id #      : index0207.js       -->

//<!-- Notes         : Guess game number between 1 >= or <=10     -->


//------------------ variables to calculate ---------------------------------------


//----------------------------------- Guess Variables To Check ---------------------------------------

while(true) {
    var Num = eval(prompt("Guess the Secret Number 1 to 10", "")); // Guess The Secret Number

    if (Num < 0 || Num > 10) {
        console.log("The Guess number entered was : " + Num);
        document.writeln("<h2>" + "Please enter numbers between 1 - 10 ? " + "</h2>"); // Invalid Entry
        break;
    }

    //------------------------------------ Conditions To Check -------------------------------------------

      if (Num == 5) {
        console.log("The Guess number entered was : " + Num);
        document.writeln('<h2>' + "Bingo! You Guessed Correct answer" + '</h2>'); //  You Guess Right
        break;
    }

    else if (Num == 4) {
        console.log("The Guess number entered was : " + Num);
        document.writeln('<h2>' + "Wow!!! ... You are Close enough to the correct answer." + '</h2>'); // Oh!! You was so close
    }

    else {
        console.log("The Guess number entered was : " + Num);
        document.writeln('<h2>' + "Well Try Again.." + '</h2>'); // Wrong Choice
        break;
    }
    
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
