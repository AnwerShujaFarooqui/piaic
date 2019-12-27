//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 020207           -->
//<!-- Doc id #      : index020207.js     -->

//<!-- Notes         : Check The Time Hours to check  -->


//----------------------------- Check The Time Hours --------------------------------------------------------

//  lets check time


//

//==========================================================

        var LineBreak = "<br />";
        
//-------------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------

        var time = prompt("Enter Current Time \n (24-HR Format) HHMM");

//---------------------------------------------------------------------------------------------------------



        if (time >= 0000 && time < 1200) {
            console.log("Time : " + time + "am");
            document.writeln("Good Morning");
        
        } else if (time >= 1200 && time < 1700) {
            console.log("Time : " + time);            
            document.writeln("Good Afternoon");
        } else if (time >= 1700 && time < 2100) {
            console.log("Time : " + time + "pm");            
            document.writeln("Good Evening");

        } else if (time >= 2100 && time <= 2359) {
            console.log("Time : " + time + "pm");
            document.writeln("Good night");
        } else {
            console.log("Wrong Time : " + time);
            document.writeln("Wrong Input, Kindly Rectify Valid Time Input");
        }       



//--------------------------------------------------------------------------------------------------------------



//---------------  Enter to Guess ----------------------------------------------------


        document.writeln('</h2>');
        document.writeln(LineBreak);

//------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------

