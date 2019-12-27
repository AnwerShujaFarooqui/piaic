//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0306           -->
//<!-- Doc id #      : index0306.js       -->

//<!-- Notes         : Choice Array       -->


//----------------------------- Choice Array ------------------------------------------------------

//                            Choice Array Query

//=================================================================================================


        var LineBreak = "<br />";

//------------------------------ User will choose the array  ---------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Choice Array Query # >>>")

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

        var oCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];

//--------------------------------------------------------------------------------------------------

        var o = ["th", "st", "nd", "rd"];

//--------------------------------------------------------------------------------------------------

        oLevel = o.slice(0,1); // slice/copy one item from position 1 

        console.log("oLevel : " + oLevel);

//        document.writeln(LineBreak);

 //       document.writeln(LineBreak);

        o.push(oLevel); // push/copy "o" to last

        console.log("o.push + " + o);

//        document.writeln(LineBreak);

//        document.writeln(LineBreak);

        o.shift();      // shift/delete "o" from 1st position

       console.log("o.shift + " + o);

        j = 1;

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

        for (i=0; i < oCities.length; i++){
                console.log(j + o[i] + " choice is  " + oCities[i]);

                document.writeln(j + o[i] + " choice is  " + oCities[i]);
                document.writeln(LineBreak);
                document.writeln(LineBreak);
                j++;

        }

                document.writeln(LineBreak);
                document.writeln(LineBreak);


        document.writeln("</h2>");

//--------------------------------------------------------------------------------------------------

