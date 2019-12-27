//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 020202             -->
//<!-- Doc id #      : index020202.js     -->

//<!-- Notes         : Check Two Integer  -->


//----------------------------- Check The Letter --------------------------------------------------------

        //var Char = prompt("Enter a Letter ? ");
        //var ChkChar = Char.charCodeAt(0);

        var x = prompt("enter first number");
        var y = prompt("enter second number");

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln(LineBreak);

        
        if (x > 0 && y > 0 && x > y) {
            console.log( "x = " + x + " : y = " + y);
            document.writeln("'x' is the largest value number  " + x);
        
        } else if (x > 0 && y > 0 && x < y) {
            console.log("x = " + x + " : y = " + y);
            document.writeln("'y' is the largest value number  " + y);
        
        } else if (x === y && x > 0 && y > 0) {
            console.log("x = " + x + " : y = " + y);
            document.writeln("'x' & 'y'  both value numbers are equal !!!")
        
        } else {
            console.log("x = " + x + " : y = " + y);
            document.writeln("Please add an integer value !");
    }


//------------------------------------------------------------------------------------------------------------------------------
 
       