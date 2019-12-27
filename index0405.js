//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0405         -->
//<!-- Doc id #      : index0405.js       -->

//<!-- Notes         :  Program : Number Rounding Method -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Number Rounding Method

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var num = prompt("Type a number");

        var num = Number(num);

//---------------------------------------------------------------------------------------------------

        var roundNum = Math.round(num);

        var floorNum = Math.floor(num);

        var ceilNum = Math.ceil(num);

//----------------------------------------------------

        document.writeln('<h2>');
        //document.writeln("<<< Number Rounding Method >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak); 
        document.writeln(LineBreak);

        console.log("Number: " + num);
        document.writeln("Number: " + num);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("Round of Value: " + roundNum);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("Floor Value: " + floorNum);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("Ceil Value: " + ceilNum);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
