//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0410         -->
//<!-- Doc id #      : index0410.js       -->

//<!-- Notes         :  Program : Rounding The Given Number To Desire Decimal -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Rounding The Given Number To Desire Decimal

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var input = [16.765, 12.37982, -9.3079499];

//=====================================================================================


//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Figures with various decimal rounding   >>>");

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

        console.log("Input : ");       // Diffrent Numbers with various decimal figures
        document.writeln("Input : ");

        for (i = 0; i < 3; i++) {
                console.log(input[i]);
                document.writeln(LineBreak);
                document.writeln(input[i]);   
        }

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Rounded Output : ");
        document.writeln("Rounded Output : ");

        for (i = 0; i < 2; i++) {                  // Number with Rounding Two Decimals
                console.log(input[i].toFixed(2));
                document.writeln(LineBreak);
                document.writeln(input[i].toFixed(2));
        }
        
        console.log(input[2].toFixed(4));            // Number with Rounding Four Decimals
        document.writeln(LineBreak);
        document.writeln(input[2].toFixed(4));

//------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
