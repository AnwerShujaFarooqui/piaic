//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0511         -->
//<!-- Doc id #      : index0511.js       -->

//<!-- Notes         :  Program : Check if String is Vowel or Not -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Check if String is Vowel or Not

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Check if String is Vowel or Not  >>>");

//--------------------------------------------------------------------------------------------------


function isVowel(char) {

        var userInputChar = prompt(" Input a character to find its a VOWEL family or not");
        var character = userInputChar.toLowerCase();

        switch (character) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                        return alert(true + " its a vowel");
                        
                default:
                        return alert(false + " its not a vowel");

        }
}

isVowel();



//=====================================================================================================

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
