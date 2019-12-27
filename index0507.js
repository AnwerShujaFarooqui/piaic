//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0507         -->
//<!-- Doc id #      : index0507.js       -->

//<!-- Notes         :  Program : Check the given date is weekend or not -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Check the given date is weekend or not

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Check the Date  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

function check_weekend(date) {
        var date = prompt("Type date \n \n format Jan 1, 1970");

        var input = new Date(date);
        var day = input.getDay();

        document.writeln(date);
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        switch (day) {
                case 0:
                        console.log(">>>> Wait for 5 more days");
                        return document.writeln("Sorry! wait for 4 more days");
                
                case 1:
                        console.log(">>>> Wait for 4 more days");
                        return document.writeln("Sorry! wait for 4 more days");
                
                case 2:
                        console.log(">>> Wait 3 more days");
                        return document.writeln("Sorry! wait for 3 more days");
                        
                case 3:
                        console.log(">> Sorry! wait for 2 more days");
                        return document.writeln("Sorry! wait for 2 more days");
                        
                case 4:
                        console.log("> Lets! wait for 1 more day");
                        return document.writeln("Sorry! wait for 1 more day");
                        
                case 5:
                        console.log("<<< Weekend starts tommorrow >>>");
                        return document.writeln("Sorry! Weekend starts tommorrow");

                case 6:
                        console.log("Hurray !!! Its weekend");
                        return document.writeln("Its weekend !");

        }
}

check_weekend();


//---------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
