//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 020204            -->
//<!-- Doc id #      : index020204.js     -->

//<!-- Notes         : Check The Numbers are +ve, -ve or zero  -->


//----------------------------- Check The Letter --------------------------------------------------------

//  input a number and show the number is positive, negative or zero.


//

//==========================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------

        var vowels = prompt("Type a word");

//---------------------------------------------------------------------------------------------------------

        vowels = vowels.toLowerCase();
        
        if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
            console.log("Vowel = " + vowels);
            document.write("True!!! Word is a vowel");
        
        } else {
            console.log("Not a Vowel Word :  " + vowels);
            document.write("False !! Word is not vowel");
        
        }

//-------------------------------------------------------------------------------------------------------

        document.writeln('</h2>');
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------

