//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0407         -->
//<!-- Doc id #      : index0407.js       -->

//<!-- Notes         :  Program : Appearence of the word -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Appearence of the word

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var temp = ("The quick brown fox jumps over the lazy dog");

//---------------------------------------------------------------------------------------------------

        var templower = temp.toLowerCase();

        var count     = (templower.match(/the/g) || []).length;

//----------------------------------------------------

        document.writeln('<h2>');
        //document.writeln("<<< Appearence of the word  >>>");

//--------------------------------------------------------------------------------------------------



        document.writeln(LineBreak); 
        document.writeln(LineBreak);

        console.log(temp);
        document.writeln(temp);        // Check the appearence ot a word
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Word 'The' was " + count + " times");
        document.writeln("There are " + count + " occurrences of word 'The'");
        document.writeln(LineBreak);
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
