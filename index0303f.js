//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0303f           -->
//<!-- Doc id #      : index0303f.js     -->

//<!-- Notes         : Colors to check  -->


//----------------------------- Check The Colors  3f --------------------------------------------------------

//  lets check Colors

//

//==========================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------


//--------- User will choose the color and position to add ---------------

        var colorInput    = prompt("Enter a Color you want to add: ");

        var colorPosition = prompt("Enter the Position where you want to add the color: ");

        var colors = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black", " grey"];

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< C O L O R S >>>")
        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------------------------------


        document.writeln(LineBreak);
        document.writeln("<h3>" + "Add a color in the array and the position you want to add:" + "</h3>");
        document.writeln(LineBreak);


        colorPosition = parseInt(colorPosition);
        colors.splice(colorPosition, 0, colorInput);

        document.writeln('<h3>'  + colors + '</h3>');

        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------------

