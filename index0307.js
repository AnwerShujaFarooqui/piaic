//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0307           -->
//<!-- Doc id #      : index0307.js       -->

//<!-- Notes         : Union Two Array       -->


//----------------------------- Union Two Array ------------------------------------------------------

//                          Union Two Array Query

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var x = [10, 10, 20, 30, 30, 30, 35, 37, 42, 43, 45, 46, 50, 50, 55, 60, 1, 2, 3, 4, 5, 6]; //array # 1

//--------------------------------------------------------------------------------------------------

        var y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   // array # 2

//--------------------------------------------------------------------------------------------------

        var union = [...new Set([...y, ...x])];   // array union

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln(">>>>> Union of Two Different Array # <<<<<")

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("union: " + union);

        document.write("union: " + union);


//--------------------------------------------------------------------------------------------------

        document.writeln("</h2>");

//--------------------------------------------------------------------------------------------------


