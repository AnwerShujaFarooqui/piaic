//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 01 : Q # 0111         -->
//<!-- Doc id #      : index0111.js       -->

//<!-- Notes         :  Program : The Temperature Converter -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : The Temperature Converter

/* =================================================================================================

to convert temperature :

to get in Celsius --->  C = ( F - 32) * 5 / 9

to get in Fahrenheit --->  F = ( C * 9 / 5 ) + 32


/*================================================================================================= */


        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
 

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//---------------------  ----------------------------------

        var cTemp = prompt("Enter the Temperature in Celsius (C) ", "");
        var fTemp = prompt("Enter the Temperature in Fahrenheit (F) ", "");

        var fC = Number((fTemp - 32) / 1.8);
        var cF = Number((cTemp * 1.8) + 32);

        document.writeln(cTemp + " C is " + cF + " F");

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln(fTemp + " F is " + fC + "  C");
        
//-----------------------------------------------------------------------------------------------------------
 
        document.writeln(LineBreak);
        document.writeln(LineBreak);


        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
