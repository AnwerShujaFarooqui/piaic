//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0502         -->
//<!-- Doc id #      : index0502.js       -->

//<!-- Notes         :  Program : Calculate Area of Rectangle -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Calculate Area of Rectangle

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Calculate Area of Rectangle  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//-----------------------------------------------------------------------------------------------------

// (i)Arguments as variable
var width = Number(prompt("Enter the width of Rectangle"));
var height = Number(prompt("Enter the Height of Rectangle"));

function sum() {
        var area = height * width
        return document.writeln("Area of rectangle is " + area)
}

sum();

// (ii)Argument as value
function area(length, width) {
        var area = length * width
        return console.log("area of rectangle is " + area)
}

area(12, 12);


//---------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
