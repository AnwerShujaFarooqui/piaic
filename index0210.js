//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 10             -->
//<!-- Doc id #      : index0210.js       -->

//<!-- Notes         : Temperature Check  -->



//----------------------------------- Enter The Temperature -----------------------------------------------


    var Temp = Number(prompt("Enter a Temperature : ", ""));       // Number to temperature
    
    

    //------------------------------------ Check Out Temperature -------------------------------------------

      if (Temp >  40){
            console.log(Temp + "C");
            document.writeln('<h2>' + Temp + "C - It is too hot outside."  + '</h2>');    //  The Temperature Check

      } else if (Temp > 30) {
            console.log(Temp + "C");
            document.writeln('<h2>' + Temp + "C - The Weather today is normal." + '</h2>');    //  The Temperature Check


      } else if (Temp > 20) {
            console.log(Temp + "C");
            document.writeln('<h2>' + Temp + "C - Today's Weather is cool." + '</h2>');    //  The Temperature Check

 
      } else if (Temp > 10) {
            console.log(Temp + "C");
            document.writeln('<h2>' + Temp + "C - OMG! Today's weather is so cool." + '</h2>');    //  The Temperature Check

      } else if (Temp <= 10) {
          console.log(Temp + "C");
          document.writeln('<h2>' + Temp + "C - Hhrrr!!! Today's everyone freezed." + '</h2>');    //  The Temperature Check

      }




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
