//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0406         -->
//<!-- Doc id #      : index0406.js       -->

//<!-- Notes         :  Program : Dice Using Rounding Method -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Dice Using Rounding Method

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var random = Math.random();

        var random2 = Math.random();

//---------------------------------------------------------------------------------------------------

        var dice = (random * 6);

        var dice2 = (random2 * 6);

//----------------------------------------------------

        document.writeln('<h2>');
        //document.writeln("<<< Dice Using Rounding Method >>>");

//--------------------------------------------------------------------------------------------------



        document.writeln(LineBreak); 
        document.writeln(LineBreak);

        console.log("Dice 1 : " + Math.ceil(dice));
        document.writeln("Random Dice 1 Value : " + Math.ceil(dice)); // Dice 1
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Dice 2 : " + Math.ceil(dice2));
        document.writeln("Random Dice 2 Value : " + Math.ceil(dice2)); // Dice 2
        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
