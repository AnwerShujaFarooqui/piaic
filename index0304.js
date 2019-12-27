//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0304           -->
//<!-- Doc id #      : index0304.js     -->

//<!-- Notes         : Initialize Array  -->


//----------------------------- Initialize Array ------------------------------------------------

//  Initialize Array

//

//======================================================================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------


//--------- User will choose the city  ---------------

        document.writeln('<h2>');
        document.writeln("<<< C I T I E S >>>")

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------

        var cities = [" Karachi", " Lahore", " Islamabad", " Peshawar", " Quetta"];

//------------------------------------------------------------------------------------------------------------------------------

        var citiesSliced = cities.slice(3, 5)

//------------------------------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------



        document.writeln("Before Deletion : ");
        document.writeln(LineBreak);
        document.writeln("----------------------");
        document.writeln(LineBreak);
  
        document.writeln(cities);

        document.writeln(LineBreak);

        document.writeln(LineBreak);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("After Deletion - ");
        
        document.write(" Selected Cities List: ");
        document.writeln(LineBreak);
        document.writeln("-----------------------------------------------");
        document.writeln(LineBreak);


        document.writeln(citiesSliced);

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("</h2>");

//-----------------------------------------------------------------------------------------------


