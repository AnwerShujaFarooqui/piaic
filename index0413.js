//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0413         -->
//<!-- Doc id #      : index0413.js       -->

//<!-- Notes         :  Program : Determine minute and time since 1970 -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Determine minute and time since 1970

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');

        document.writeln("<<< Determine minute and time since 1970  >>>");

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------   Determine minute and time since 1970  ----------------------------------------------


        var newDate = new Date();

        var milseconds = newDate.getTime();
        
        var minutes = (milseconds / 60000);

//----------------------------------------------------------------------------------------------------

        console.log("Current Date : " + newDate);
        document.writeln("Current Date : " + newDate);
        
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Elapsed Millisec. Since Jan 1, 1970 : " + milseconds);
        document.writeln("Elapsed Milliseconds Since Jan 1, 1970 : " + milseconds);
        
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Elapsed Min. Since Jan 1, 1970 : " + minutes);
        document.writeln("Elapsed Minutes Since Jan 1, 1970 : " + minutes);
        
        document.writeln(LineBreak);
        document.writeln(LineBreak);


//----------------------------------------------------------------------------------------------------




//-------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------
        document.writeln(LineBreak); 
        document.writeln(LineBreak);

        //console.log(temp);
        //document.writeln(temp);        // Check the appearence ot a word
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        //console.log("Word 'The' was " + count + " times");
        //document.writeln("There are " + count + " occurrences of word 'The'");
        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
