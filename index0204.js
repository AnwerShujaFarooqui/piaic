/*-- PIAIC - BlockChain - Semester II   -->

<!-- Id # : BCC 037581                  -->
<!-- Name : Anwer Shuja Farooqui        -->

<!-- Assignment 02 : Q # 04             -->
<!-- Doc id #      : index0204.js     -->

<!-- Notes         : Vehicle Fuel Check Warning     -->
*/


            
                var VehicleFuel = prompt("Please check the fuel level of your car in Litre(s) : ", 1.0);
                var LineBreak = "<br />";

                document.writeln(LineBreak);

// -------------------------------------------------------------------------------------------------------------


                if (VehicleFuel < 0.25) {
                    console.log(VehicleFuel);
                    document.writeln('<h2>' + "Warning !!!! ... Your Fuel is extremly low " + VehicleFuel + " ltr(s)" + " - Please refill the fuel in your car" + '</h2>' );
                    document.writeln(LineBreak);

                // <<< Try to use Multiple logic condition application resolved >>>
                } else if (VehicleFuel > 0.24 && VehicleFuel <20) {
                    console.log(VehicleFuel);
                    document.writeln('<h2>' + "Better Full your Fuel Tank ........ " + '</h2>' );
                    document.writeln(LineBreak);

                // <<< Try to use Multiple logic condition application resolved >>>
                } else if  (VehicleFuel > 19.99) {
                    console.log(VehicleFuel);
                    document.writeln('<h2>' + "Enjoy Riding .. Bon Vogue !!!" + '</h2>' );
                    document.writeln(LineBreak);

                } 

                    document.writeln(LineBreak);
            
// ----------------------------------------------------------------------------------------------------------------
