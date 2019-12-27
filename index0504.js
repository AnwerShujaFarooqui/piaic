//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0504         -->
//<!-- Doc id #      : index0504.js       -->

//<!-- Notes         :  Program : Geometric Calculate -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Geometric Calculate

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Geometric Calculate  >>>");

//--------------------------------------------------------------------------------------------------


        document.writeln(LineBreak);
        document.writeln(LineBreak);

//-----------------------------------------------------------------------------------------------------

function calcCircumference(radius) {
        var pi = 3.142
        var circumference = 2 * pi * radius;

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        return ("Circumference of Circle: " + circumference)
}

function calcArea(radius) {
        var pi = 3.142
        var area = pi * (radius * radius);

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        return ("Area of circle: " + area)
}

document.write(calcCircumference(5));
document.write("<br>" + calcArea(5));


//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak); 
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
