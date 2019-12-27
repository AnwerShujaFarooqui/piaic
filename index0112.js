//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 01 : Q # 0112         -->
//<!-- Doc id #      : index0112.js       -->

//<!-- Notes         :  Program : Convert Foriegn Currency in Pak Rupees -->

/* ----------------------------- Program JavaScript -----------------------------------------------

                       Program : Convert Foriegn Currency in Pak Rupees
---------------------------------------------------------------------------------------------------

to convert foriegn currency in pak rupees :

US$ =============> Pak Rupees

Saudi Riyal =====> Pak Rupees

---------------------------------------------------------------------------------------------------- */


        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

                                        // Foriegn Currency Rate
        var usd = Number(155);          // US$ 
        var sar = Number(41);           // Saudi Riyal
        var pkr = Number(0);

        var usp = usd * 10;
        var sap = sar * 25;
        var sum = usp + sap;

//<!-- ------------------------------------------------------------------------------------------------- -->

        document.writeln('<h2>');
 
        document.writeln(LineBreak);
        document.writeln(LineBreak);

//------------------------------------------------------------------------

        document.writeln(" Currency in PKR");

        document.writeln(LineBreak);
        document.writeln("------------------------");

        document.writeln(LineBreak);
 
        document.writeln("<h3> << US$ = Rs.155.00 | Saudi Riyal = Rs.41.00 >> </h3>");

        document.writeln("................................................................................................." + "<h2>");

        document.writeln(LineBreak);
        document.writeln(LineBreak);
//-----------------------------------------------------------------------------------------------------------

document.writeln(10 + " US$ ===========> Pak. Rs. " + usp);
document.writeln(LineBreak);
document.writeln(LineBreak);

document.writeln(25 + " Saudi Riyal =====> Pak. Rs. " + sap);
document.writeln(LineBreak);
document.writeln(LineBreak);

document.writeln("===============================");
document.writeln(LineBreak);
document.writeln(LineBreak);

document.writeln("~~~~~~~~~~~~~~ Total PKR Rs. " + sum);
document.writeln(LineBreak);
document.writeln(LineBreak);
document.writeln("===============================");


//-------------------------------------------------------- 
 
        document.writeln(LineBreak);
        document.writeln(LineBreak);

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
