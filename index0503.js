//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0503         -->
//<!-- Doc id #      : index0503.js       -->

//<!-- Notes         :  Program : Check if the string is palindrome -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Check if the string is palindrome

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
       // document.writeln("<<< Check if the string is palindron  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

var userInput = prompt("Enter a word to find whether its a palindrome or not? ")

function palindrome(str) {
        var string = str.toLowerCase();
        var len = string.length;
        var twoParts = Math.floor(len / 2);

        for (var i = 0; i < twoParts; i++) {
                if (string[i] !== string[len - 1 - i]) {
                        return alert("False: " + userInput + " is not a palindrome ");
                }
                else {
                        return alert("True: " + userInput + " is a palindrome ");
                }
        }
}

palindrome(userInput);



//-------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
