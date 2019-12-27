//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0303b           -->
//<!-- Doc id #      : index0303b.js     -->

//<!-- Notes         : Colors to check  -->


//----------------------------- Check The Colors  3b--------------------------------------------------------

//  lets check Colors


//

//==========================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------


        var colorInput = prompt("Enter your Colour that will add in the ending ? \n < red, blue, green, purple, yellow, brown, pink, white, black, grey >");
        colorInput = colorInput.toLowerCase();
        var colors = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black", " grey"];

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< C O L O R S >>>")
        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln("<h3>" + "The selected color '" + colorInput + "' added at the end of list:" + "</h3>");
        document.writeln(LineBreak);

        colors.push(colorInput);

        document.writeln('<h3>'  + colors + '</h3>');

        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

