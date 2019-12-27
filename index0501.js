//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0501         -->
//<!-- Doc id #      : index0501.js       -->

//<!-- Notes         :  Program : Enter a number to find its factorial -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Enter a number to find its factorial -->

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        // var ageInput = prompt("Type your age \n \n find your birth year")

        // var rightNow = new Date();
        // var currentYear = rightNow.getFullYear();
        var n = 0;

//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Enter a number to find its factorial  >>>");

//--------------------------------------------------------------------------------------------------


        document.writeln(LineBreak); 
        document.writeln(LineBreak);

//        document.write("Your Age is : " + ageInput);        // please enter your age


        var userInput = prompt("Enter a number to find its factorial");

        function factorial(n) {
                if (n === 0) {
                return 1;
                } else {
                return n * factorial(n - 1);

                }
        }

        console.log(userInput + " ----> " + factorial(userInput ));
        document.writeln(userInput + " ----> " + factorial(userInput));
 
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
