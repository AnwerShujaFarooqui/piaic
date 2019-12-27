//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 0311           -->
//<!-- Doc id #      : index0311.js       -->

//<!-- Notes         : Program To Search User Input Item     -->

//----------------------------- Program To Search User Input Item --------------------------------

//                          Program To Search User Input Item

//=================================================================================================

        var LineBreak = "<br />";

//--------------------------------------------------------------------------------------------------

        var a = ["cake", "apple pie", "cookie", "chips", "patties"];

        var b = [10, 2, 0, 30, 0]

//--------------------------------------------------------------------------------------------------
        // select specify items
        var c = prompt("Welcome to Yummy Bakery. \n \n What you like to eat? \n 1) Cake 2) Apple Pie 3) Cookie  4) Chips  5) Patties ");

        c = c.toLowerCase();

        var d = parseInt(prompt("Qty you want purchase?  ", 0)); // numeric input
        //var d = parseInt(e);
//----------------------------------------------------

        document.writeln('<h2>');
        document.writeln("<<< Yummy Bakery  >>>");

//--------------------------------------------------------------------------------------------------

        document.writeln(LineBreak);
        document.writeln(LineBreak);
        document.writeln('</h2>');

//------------------------------------------------

        function contains(a, b) {
                document.writeln("<h2>");

                //  console.log("check 1" + "c : " + c + "  d :" + d);
                for (var i = 0; i < a.length; i++) {
                        //console.log("check 2" + "a " + a[i]+ " b : " + b[i] +  "c : " + c + "  d :" + d);
                        if (a[i] === c && b[i] != 0 &&  d <= b[i]) {

                //     console.log("check 3");
                                console.log("Item " + a[i] + " Stock avail. : " + b[i] + " " + c + "  Item ordered : " + d);

                                document.writeln("Thank you for purchasing " + d + " qty of " + a[i]);
                        return true;
                        }

                }
                console.log("check 4");
                document.writeln("Sorry out of stock \n \n Please visit again");
                document.writeln("</h2>");
                return false;
        }


//--------------------------------------------------------------------------------------------------

        //document.writeln("</h2>");

//--------------------------------------------------------------------------------------------------

contains(a, b);
