//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 06             -->
//<!-- Doc id #      : index0206.js     -->

//<!-- Notes         : Mark Sheet         -->


//-------------------------- Input  Variable ------------------------------------------------

                var Maths        = Number(prompt("Please Maths number obtain     : ", 100));
                var Physics      = Number(prompt("Please Physics number obtain   : ", 100));
                var Economics    = Number(prompt("Please Economics number obtain : ", 100));

//------------------------- other variables to calculate ---------------------------------------

                var TotalMarks      = 300;
                var TotalSum        = (Maths + Physics + Economics);
                var TotalPercent    = ((TotalSum / TotalMarks) * 100);
                var grade           = (TotalPercent);
                var GradePercentage = ((TotalPercent.toFixed(2)) + "%");
                var Position        = ["A-one", "A", "B", "Fail"];
                var Remarks         = ["Excellent !!!", "Good", "You need to improve", "Sorry"];
                var LineBreak       = ("<br />");


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <<<<< calculations >>>>>> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                if(grade > 79 && grade < 101) {
                   document.writeln('<h1>' + "Mark Sheet" + '</h1>' + LineBreak + LineBreak + '<h2>' + "Total Marks : " + TotalMarks + LineBreak + LineBreak + "Marks Obtained : " + TotalSum + LineBreak + LineBreak + "Pecentage : " + GradePercentage + LineBreak + LineBreak + "Position : " + Position[0] + LineBreak + LineBreak + "Remarks : " + Remarks[0] + '</h2>')

                  } else if (grade> 69 && grade < 80) {
                   document.writeln('<h1>' + "Mark Sheet" + '</h1>' + LineBreak + LineBreak + '<h2>' + "Total Marks : " + TotalMarks + LineBreak + LineBreak + "Marks Obtained : " + TotalSum + LineBreak + LineBreak + "Pecentage : " + GradePercentage + LineBreak + LineBreak + "Position : " + Position[1] + LineBreak + LineBreak + "Remarks : " + Remarks[1] + '</h2>')

                     } else if (grade> 59 && grade < 70) {
                   document.writeln('<h1>' + "Mark Sheet" + '</h1>' + LineBreak + LineBreak + '<h2>' + "Total Marks : " + TotalMarks + LineBreak + LineBreak + "Marks Obtained : " + TotalSum + LineBreak + LineBreak + "Pecentage : " + GradePercentage + LineBreak + LineBreak + "Position : " + Position[2] + LineBreak + LineBreak + "Remarks : " + Remarks[2] + '</h2>')

                           } else if (grade < 60) {
                   document.writeln('<h1>' + "Mark Sheet" + '</h1>' + LineBreak + LineBreak + '<h2>' + "Total Marks : " + TotalMarks + LineBreak + LineBreak + "Marks Obtained : " + TotalSum + LineBreak + LineBreak + "Pecentage : " + GradePercentage + LineBreak + LineBreak + "Position : " + Position[3] + LineBreak + LineBreak + "Remarks : " + Remarks[3] + '</h2>')

               }  
   
                
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// -------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------
