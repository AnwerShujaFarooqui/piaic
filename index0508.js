/* 
<-- PIAIC - BlockChain - Semester II   -->

<-- Id # : BCC 037581                  -->
<-- Name : Anwer Shuja Farooqui        -->

<-- Assignment 02 : Q # 0508         -->
<-- Doc id #      : index0508.js       -->

<-- Notes         :  Program : Take Birth Date & Calculate Age, Days, Months and Years  --->

----------------------------- Program JavaScript -----------------------------------------------

                       Program : Take Birth Date & Calculate Age, Days, Months and Years

------------------------------------------------------------------------------------------------
                                                                                                
================================================================================================ */

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<<  Calculate The Age  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);

//--------------------------------------------------------------------------------------------------

    function ageCalc(dOb) {                                                    //
        
        var dOb = prompt("Type Date of Birth & get your Detailed Age \n \n format: Jan 1, 1970"); // Input Date

        var currDate = new Date();                                              // Capture Current Date
        var BirthDate = new Date(dOb);                                          //         Input Date

        var days = Math.floor((currDate - BirthDate) / (1000 * 60 * 60 * 24));  // Generate Total Days
        var calcYears = Math.floor(days / 365);                                 // Calculated Years
        var calcMonths = Math.floor((days % 365) / 31);                         //            Months
        var calcDays = days - (calcYears * 365) - (calcMonths * 31);            //            Days

        var cB = currDate - BirthDate;                                          //  Date Valid Check
  

        if ((calcYears == 0 && calcMonths == 0 && calcDays == 0) || cB < 0 ) {  // ------------------------- |
                console.log("Your entry is illegal !!!");                       // Invalid Date Entry Check  |
                document.writeln("Please try to enter right entry");            // ------------------------- |
                return;                                                         //  Exit from condition      | 
                                                                                // ------------------------- |
        } 

        console.log("You are ");
        document.writeln("You are ");

                if (calcYears != 0){
                        console.log(calcYears + " Years, ");            // ---------------------------- |
                        document.writeln(calcYears + " Years, ");       //   Calculated Age Years       | 
                                                                        //                              |
                }                                                       //                              |
                if (calcMonths != 0) {                                  //                              |
                        console.log(calcMonths + " Months, ");          //                              |
                        document.writeln(calcMonths + " Months, ");     //    Calculated Months         |
                                                                        //                              |
                }                                                       //                              |
                if (calcDays != 0){                                     //                              |
                        console.log(calcDays + " Day ");                //                              |
                        document.writeln(calcDays + " Day ");           //    Calculated Days           |         
                                                                        // ---------------------------- |

                } 
                console.log(" old");
                document.writeln(" old");
         
            return;                                                     // function implement
    }

    ageCalc();

//==================================================================================================

        document.writeln(LineBreak); 
        document.writeln(LineBreak);

//----------------------------------------------------------------------------------------------------

        document.writeln('</h2>');

//------------------------------------------------------------------------------------------------------
