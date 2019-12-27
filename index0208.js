//<!-- PIAIC - BlockChain - Semester II                        -->

//<!-- Id # : BCC 037581                                       -->
//<!-- Name : Anwer Shuja Farooqui                             -->

//<!-- Assignment 02 : Q # 08                                  -->
//<!-- Doc id #      : index0208.js                            -->

//<!-- Notes         : Check if Input Number divisible with 3  -->


//-------------------------- Input  Variable ------------------------------------------------

                var Chk3      = Number(prompt("Please enter a number to check if can be divisible with 3 : ", 3));

//------------------------- other variables to calculate ---------------------------------------

                var Chk3Fig      = Chk3 % 3;
                var LineBreak = "<br />";

                document.writeln('<h2>');
                document.writeln(LineBreak);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <<<<< calculations >>>>>> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                if (Chk3Fig == 0){
                  console.log("The number enter was : " + Chk3);
                  document.writeln(LineBreak);
                  document.writeln("the number "+ Chk3 + " is divisible by 3");
                  document.writeln(LineBreak);
                }
                
                 else if (Chk3Fig !== 0){
                  console.log("The number enter was : " + Chk3);
                  document.writeln(LineBreak);
                  document.writeln("the number " + Chk3 + " have the reminder number " + Chk3Fig + " and it is not divisible by 3 ");
                  document.writeln(LineBreak);

                }
                    
                document.writeln('</h2>');                
                
   
                
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// -------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------
