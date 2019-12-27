//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0303           -->
//<!-- Doc id #      : index0303.js     -->

//<!-- Notes         : Colors to check  -->


//----------------------------- Check The Colors --------------------------------------------------------

//  lets check Colors


//

//==========================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------


        var colorInput = prompt("Enter your Colour that will add in starting  ? \n < red, blue, green, purple, yellow, brown, pink, white, black, grey >");
        colorInput = colorInput.toLowerCase();
        var colors = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black", " grey"];


//------------------------------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');

        document.writeln("<<< C O L O R S >>>")

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

        colors.unshift(colorInput);
        
        document.writeln('<h3>'  + colors + '</h3>');

        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------

