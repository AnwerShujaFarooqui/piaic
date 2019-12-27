//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0505         -->
//<!-- Doc id #      : index0505.js       -->

//<!-- Notes         :  Program : Cash WithDrawl -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Cash WithDrawl

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Cash WithDrawl  >>>");

//--------------------------------------------------------------------------------------------------


document.writeln(LineBreak);

var amount = prompt("Enter the amount you wish to withdrawl \n \n (Notice : Today Currency notes nominations shall only be available in :\n < 100 / 50 / 10 notes >  ");

console.log("Amount    : " + amount);

document.writeln(LineBreak);


function currNotes() {
        var hundredNotes = Math.floor(amount / 100);
        var fiftyNotes   = Math.floor((amount % 100) / 50);
        var tenNotes     = Math.floor(((amount % 100) % 50) / 10);
        var remaining    = Math.floor(((amount % 100) % 50) % 10);

        var balance = amount - remaining;

        console.log("------------------");
        console.log("Withdrawl : " + balance);
        console.log("------------------");
        console.log("Outstanding : " + remaining);

        return document.writeln("You have withdrawl amount " + hundredNotes + " hundred, " + fiftyNotes +
                " fifty and " + tenNotes + " ten " +  " notes only");
        }

        currNotes();

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------




//================================================ */