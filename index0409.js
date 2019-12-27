//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0409         -->
//<!-- Doc id #      : index0409.js       -->

//<!-- Notes         :  Program : Remove All HTML Tags From Given String  -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Remove All HTML Tags From Given String

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var strW = ("<p><strong><em>Only Print this</p></strong></em>");
        var strClean = strW.replace(/(<([^>]+)>)/ig, '');

//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Remove All HTML Tags From Given String  >>>");

//--------------------------------------------------------------------------------------------------



        document.writeln(LineBreak); 
        document.writeln(LineBreak);
        
        console.log(strW);
        
        document.writeln(strW);        // Check the sentence

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("after replacing html tags: " + strClean);

        document.writeln("after replacing html tags: " + strClean);

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
