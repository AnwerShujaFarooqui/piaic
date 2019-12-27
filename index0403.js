//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0403          -->
//<!-- Doc id #      : index0403.js       -->

//<!-- Notes         :  Program : Password Verification -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Password Verification

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var passInput = prompt("TYPE YOUR PASSWORD");

        var letterNumber = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        var numbers = /^[0-9]+$/;

//----------------------------------------------------

        document.writeln('<h2>');
        //document.writeln("<<< Check Valid Password  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak); 
        document.writeln(LineBreak);


        if (passInput.match(letterNumber) && !passInput.charAt(0).match(numbers)) {
                console.log("Congrats!!!");
                document.writeln("<<< Login Successful >>>");
        }
        else  {
                var passInput = prompt(">>>>> Enter a Valid Password <<<<<");
                console.log("Opps ???");
                document.writeln("<--- Invalid Password --->");
            };

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
