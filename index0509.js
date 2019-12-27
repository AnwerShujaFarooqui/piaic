//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0509         -->
//<!-- Doc id #      : index0509.js       -->

//<!-- Notes         :  Program : Function to Add Weeks in Curent Date -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Function to Add Weeks in Curent Date

//=================================================================================================

        var LineBreak = "<br />";

//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Function to Add Weeks in Curent Date  >>>");

//--------------------------------------------------------------------------------------------------


function add_week(num) {

        var now = new Date();
        now.setDate(now.getDate() + num * 7)
        return console.log(now);
}

add_week(2)
add_week(4)


//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak); 
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
