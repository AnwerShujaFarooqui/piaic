//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 020203             -->
//<!-- Doc id #      : index020203.js     -->

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


        var num = prompt("Enter a number to Check the status, if it is \n Positive, Negative or Zero.", 0);

        if (num > 0) {
            console.log("Number to check +ve : " + num);
            document.writeln(num + " is Positive number");

        } else if (num < 0) {
            console.log("Number to check -ve : " + num);
            document.writeln(num + " is Negative number");

        } else if (num == 0 && -num == 0) {
            console.log("Number to check 0 : " + num);
            document.writeln("This is Zero");

        } else {
            console.log("Number to check :" + num);
            document.writeln("Please Type Numeric Only ! ");

        }

//-------------------------------------------------------------------------------------------------------

        document.writeln('</h2>');
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------

