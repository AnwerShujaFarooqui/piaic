//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0305           -->
//<!-- Doc id #      : index0305.js       -->

//<!-- Notes         : Unique Array       -->


//----------------------------- Unique Array ------------------------------------------------------

//                            Unique Array Query

//=================================================================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------


//------------------------------ User will choose the array  ---------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Array for Unique # >>>")

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

        var array1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, "c", "c"];

//--------------------------------------------------------------------------------------------------

        var uniqueArray = [...new Set(array1)];

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

        document.writeln("Set of Array : ");
        document.writeln(LineBreak);
        document.writeln("-----------------");
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln(array1);  

        document.writeln(LineBreak);

        document.writeln(LineBreak);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("After Removing Duplicates: ");
        document.writeln(LineBreak);
        document.writeln("------------------------------------");
        document.writeln(LineBreak);


        document.writeln(uniqueArray);        
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("</h2>");

//--------------------------------------------------------------------------------------------------

