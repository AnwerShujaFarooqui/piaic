//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0506         -->
//<!-- Doc id #      : index0506.js       -->

//<!-- Notes         :  Program : Write a Function that Generate Mirror Array -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Write a Function that Generate Mirror Array

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Generate Mirror Array  >>>");

//--------------------------------------------------------------------------------------------------


        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var arr2 = [11, 12, 13, 14, 15, 16, 17]

        document.writeln(arr);

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln(arr2);


function mirror(arr) {
        var reverse = arr.reverse();
        return console.log(reverse); 
                
}

mirror(arr);
mirror(arr2)

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
