//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0303g           -->
//<!-- Doc id #      : index0303g.js     -->

//<!-- Notes         : Colors to check  -->


//----------------------------- Check The Colors  3g ------------------------------------------------

//  lets check Colors

//

//======================================================================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------


//--------- User will choose the color and position to add ---------------

        document.writeln('<h2>');
        document.writeln("<<< C O L O R S >>>")

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------


        var colors = [" 1. red", " 2. blue", " 3. green", " 4. purple", " 5. yellow", " 6. brown", " 7. pink", " 8. white", " 9. black", " 10. grey"];

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("Before Deletion");
        document.writeln(LineBreak);
        document.writeln("--------------------");
        document.writeln(LineBreak);

        document.writeln(colors);

        document.writeln(LineBreak);
        document.writeln(LineBreak);
        document.writeln(LineBreak);
        document.writeln(LineBreak);


        var colorDeletation = prompt("How many colors you want to Delete");
        var colorDelPosition = prompt("Enter the Position where you want to delete these colors\n(colors will start delete just after the input number)");

        colors.splice(colorDelPosition, colorDeletation);

        document.writeln("After Deletion");
        document.writeln(LineBreak);
        document.writeln("-------------------");
        document.writeln(LineBreak);

        document.write(colors);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("</h2>");

//-----------------------------------------------------------------------------------------------