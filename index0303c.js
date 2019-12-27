//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0303c           -->
//<!-- Doc id #      : index0303c.js     -->

//<!-- Notes         : Colors to check  -->


//----------------------------- Check The Colors  3c--------------------------------------------------------

//  lets check Colors

//

//==========================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------

     //   var colorInput = prompt("Enter your Colour that will add in the begining ? \n < red, blue, green, purple, yellow, brown, pink, white, black, grey >");
       // colorInput = colorInput.toLowerCase();
        var colors = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black", " grey"];

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< C O L O R S >>>")
        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln("<h3>" + "The selected 'two' color will slice at the begining of the list:" + "</h3>");
        document.writeln(LineBreak);
 
        colors.splice(0, 2, " orange", " voilet");
 

        document.writeln('<h3>'  + colors + '</h3>');

        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------


//3(C) Add two more color to the beginning of the array. Display the updated
//var colours = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black"];
//colours.splice(0, 2, " orange", " grey");
//document.write(colours);
//document.write("<br>");



//------------------------------------------------------------------------------------------------------------------------------

