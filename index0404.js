//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0404         -->
//<!-- Doc id #      : index0404.js       -->

//<!-- Notes         :  Program : Email Address Verification -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Email Address Verification

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var num = 12345;
        var checkEmail = prompt("Enter your email");

        var emailValidCheck = /\S+@\S+\.\S+/;

//----------------------------------------------------

        document.writeln('<h2>');
        //document.writeln("<<< Check Valid Email Address  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak); 
        document.writeln(LineBreak);



        if (checkEmail.match(emailValidCheck)) {
                console.log("Congrats!!!")
                document.writeln(checkEmail + " : Valid Email Address ")
        }
        else {
                console.log("Please Enter Valid Email Address Please !!!")
                document.writeln(checkEmail +" >>> an Invalid Email Address ??")
        }

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
