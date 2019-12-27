//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0510         -->
//<!-- Doc id #      : index0510.js       -->

//<!-- Notes         :  Program : Write a script to identify the Vowel -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Write a script to identify the Vowel

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

 
        document.writeln('<h2>');
        document.writeln("<<<  Identify the Vowel in String   >>>");

//--------------------------------------------------------------------------------------------------


function countingOfVowels(str) {

        var userInput = prompt("Type a string & get the quantity of vowels");

        var vowelsCount = 0;
        var stringToLower = userInput.toLowerCase();

        for (var i = 0; i < stringToLower.length; i++) {
                switch (stringToLower.charAt(i)) {
                        case "a":
                        case "e":
                        case "i":
                        case "o":
                        case "u":
                                vowelsCount += 1;
                                break;
                }
        } return console.log("String " + "(" + userInput + ")" + " has " + vowelsCount + " Vowels.")
}

countingOfVowels();


//==================================================================================================

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
