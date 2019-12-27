//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0414         -->
//<!-- Doc id #      : index0414.js       -->

//<!-- Notes         :  Program : Create Date & Time and Extract Hours and Reset Time -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Create Date & Time and Extract Hours and Reset Time

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var date = new Date();
        var currentDate = new Date();

        currentDate.setHours(currentDate.getHours() + 1);

//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Create Date & Time and Extract Hours and Reset Time  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak); 
        document.writeln(LineBreak);

        console.log("Current Date: " + currentDate);
        document.writeln("Current Date: " + currentDate);      // Current Date

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("1-hour ago, The Time was " + date);      
        document.writeln("1-hour ago, The Time was " + date); // The Time before One Hour

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
