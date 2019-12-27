//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0412         -->
//<!-- Doc id #      : index0412.js       -->

//<!-- Notes         :  Program : Check the date above or under 15 days of month -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Check the date above or under 15 days of month

//=================================================================================================

        var LineBreak = "<br />";


//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Check the date   >>>");

//--------------------------------------------------------------------------------------------------

        var rightNow = new Date();
        var theDate = rightNow.getDate();

//---------------------------------------------------------------------------------------------------



//--------   Date Check under or above 15 days of month  ----------------------------------------------

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');   //January is 0!
        var yyyy = today.getFullYear();

        today = dd + ' / ' + mm + ' / ' + yyyy;

        console.log("Date : " + today);



//--------------------------------------------------------------------------------------------

        if (theDate < 16) {
                document.writeln(LineBreak);
                document.writeln(LineBreak);

                var msg01 = "First fifteen days of the month";
        }
        else {
                document.writeln(LineBreak);
                document.writeln(LineBreak);

                var msg01 = "Last days of the month";
        }

//--------------------------------------------------------

        console.log(msg01);

        document.writeln("Date : " + today);

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("=======================");
        document.writeln(LineBreak);
        
        document.writeln(msg01);
        
        document.writeln(LineBreak);
        document.writeln("=======================");

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------


        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
