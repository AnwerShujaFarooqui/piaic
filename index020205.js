//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 020205            -->
//<!-- Doc id #      : index020205.js     -->

//<!-- Notes         : Check The Correct Password  -->


//----------------------------- Check The Password --------------------------------------------------------

//  lets guess the password


//

//==========================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------

        var pass = "12345"                                      // password to guess
        var passInput = prompt("Please Enter Your Password");   // lets user guess

//---------------------------------------------------------------------------------------------------------

//---------------  Enter to Guess ----------------------------------------------------


        if (passInput === pass) {
            console.log("Password : ***** -----> matches <-----");
            document.writeln("Correct! \n The Password Matched.");
        
        } else {
            console.log("Warning Password : ***** ~~~~~> unmatched <~~~~~");
            document.writeln("Incorrect Password! \n Lets Try Again.");
        
        }

//----------------------------------------------------------------------------

        document.writeln('</h2>');
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------

