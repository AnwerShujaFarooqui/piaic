//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0411         -->
//<!-- Doc id #      : index0411.js       -->

//<!-- Notes         :  Program : Take A Number Input & Find the 'Mean'   -->

//----------------------------- Program JavaScript -----------------------------------------------

//                      Program : Take A Number Input & Find the 'Mean' 

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------


        var numE = Number(prompt("How many NUMBERS need to Enter"));
        //num = num.toString();
        
        var array = [];
        var num = [];
        var numLength = num.toString().length;
        var k = 1;
        var m = 0;
        var sum = 0;

//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Calculate the Mean of Input Values  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);


        console.log("Number of Entries :  " + numE);
        console.log("Sr " + " # " + " Value " + "    ::  " + " Sub Total");
  

for (var i = 0; i < numE; i++) {
        
        num[i] = Number(prompt("Enter number # " + k + " : " + num[i]));
        m = m + num[i];

        console.log(k + " #      " + num[i] + "    ::  " + m);

        k++

//----------------------------------------------------------
        //document.writeln(i + " # " + num[i]);
  //      document.writeln(LineBreak);
//        document.writeln(LineBreak);

        //array[i] = num.charAt(i);
//----------------------------------------------------------

}


for (var j = 0; j < numE; j++) {
        sum += Number(num[j]);
}
        var findMean = (sum / numE);
        var fixed = Number(findMean.toFixed(2))

        console.log("--------------------------");


        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Total Amount :  " + sum);
        document.writeln("Total Amount : " + sum);

        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("Total Records : " + numE);

        document.writeln("Total Records : " + numE); 
        document.writeln(LineBreak);

//        console.log(temp);
  //      document.writeln(temp);        // Check the appearence ot a word
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        console.log("==========================");
        console.log("Mean : " + fixed);
        console.log("==========================");


        document.writeln("===================");
        document.writeln(LineBreak);
        document.writeln("Mean Values : " + fixed);
   
        document.writeln(LineBreak);
        document.writeln(LineBreak);
        
        document.writeln("------------------------------");


//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
