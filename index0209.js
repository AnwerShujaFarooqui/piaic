//<!-- PIAIC - BlockChain - Semester II   -->

//<!-- Id # : BCC 037581                  -->
//<!-- Name : Anwer Shuja Farooqui        -->

//<!-- Assignment 02 : Q # 09             -->
//<!-- Doc id #      : index0209.js       -->

//<!-- Notes         : Odd and Even numbers     -->


//----------------------------------- variables to check --------------------------------------------


//----------------------------------- Enter The Number -----------------------------------------------


    var Num = eval(prompt("Enter a number : ", ""));       // Number to check

    var VarRem = Num % 2;


    //------------------------------------ Check Odd and Even Numbers -------------------------------------------

      if (VarRem == 0){
        console.log("The Reminder number is : " + VarRem);
        document.writeln('<h2>'+ Num + " Number is Even"  + '</h2>');    //  The Even Number

    } else {
          console.log("The Reminder number is : " + VarRem);
          document.writeln('<h2>' + Num + " Number is Odd" + '</h2>');   //  The Odd Number
    }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
