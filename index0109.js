//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 01 : Q # 0109         -->
//<!-- Doc id #      : index0109.js       -->

//<!-- Notes         :  Program : Two Numbers Subtraction, Multiply, Division and Modulus Result -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Two Numbers Subtraction, Multiply, Division and Modulus Result

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
 
        var num1 = Number(prompt("Please enter First No. --> "));
        var num2 = Number(prompt("Please enter Second No. --> "));

        var sub1 = num1 - num2; // Subtraction

        var mul1 = num1 * num2; // Multiply

        var div1 = num1 / num2; // Division

        var mod1 = num1 % num2; // Modulus


        document.writeln("Subtraction [ " + num1 + " - " + num2  + " = " + sub1 + " ]");
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("Multiplication [ " + num1 + " * " + num2 + " = " + mul1 + " ]");
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("Division [ " + num1 + " / " + num2 + " = " + div1 + " ]");
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln("Modulus [ " + num1 + " % " + num2 + " = " + mod1 + " ]");
        document.writeln(LineBreak);
        document.writeln(LineBreak);



        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
