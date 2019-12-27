//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 01 : Q # 0114         -->
//<!-- Doc id #      : index0114.js       -->

//<!-- Notes         :  Program : Result a & b Number -->

/* ----------------------------- Program JavaScript -----------------------------------------------

                       Program : Result a & b Number
---------------------------------------------------------------------------------------------------

take a & b number and do various arithmetic result

---------------------------------------------------------------------------------------------------- */

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var a      = Number(2);              // initial value  'a'
        var b      = Number(1);                 // initial value 'b'
        
//<!-- ------------------------------------------------------------------------------------------------- -->

        document.writeln('<h2>');
 
        document.writeln(LineBreak);
        document.writeln(LineBreak);

//------------------------------------------------------------------------

        document.writeln(" Result :");

        document.writeln(LineBreak);
        document.writeln("-----------------------------");

        document.writeln(LineBreak);
        document.writeln(LineBreak);
 
        document.writeln("--a = " + --a);
        document.writeln(LineBreak);

        document.writeln("--a - --b =  " + (--a));
        document.writeln(LineBreak);

        document.writeln("--a - --b =  " + (--a));
        document.writeln(LineBreak);

        document.writeln("--a - --b =  " + (--a - --b));
        document.writeln(LineBreak);

        document.writeln("--a - --b + ++b =  " + (--a - --b + ++b));
        document.writeln(LineBreak);

        document.writeln("--a - --b + ++b + b-- =  " + (--a - --b + ++b + b--));
        document.writeln(LineBreak);

//-----------------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

    //    var a = Number(2);              // initial value  'a'
      //  var b = Number(1);                 // initial value 'b'

        var result = --a - --b + ++b + b--;        // initial value 'result'

        
        document.writeln("-----------------------------------------------");
        document.writeln(LineBreak);

        document.writeln("a is " + a);
        document.writeln(LineBreak);

        document.writeln("b is " + b);
        document.writeln(LineBreak);
        
        document.writeln("------------------------------------------------");
        document.writeln(LineBreak);

        document.writeln("result is " + result); 
        document.writeln(LineBreak);

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
