//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0415         -->
//<!-- Doc id #      : index0415.js       -->

//<!-- Notes         :  Program : Ask User The Age & Calculate -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Ask User The Age & Calculate

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var ageInput = prompt("Type your age \n \n find your birth year")

        var rightNow = new Date();
        var currentYear = rightNow.getFullYear();

//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Age & Year of Birth  >>>");

//--------------------------------------------------------------------------------------------------


        document.writeln(LineBreak); 
        document.writeln(LineBreak);

        console.log("Your Age is : " + ageInput);
        document.write("Your Age is : " + ageInput);        // please enter your age
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Your Birth Year is : " + (currentYear - ageInput));
        document.write("Your Birth Year is : " + (currentYear - ageInput));
        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
