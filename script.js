'use strict';

console.log ("I am in the HTML")
alert("Welcome to my page")


function greetUser() {
    let userName = prompt("What is your name?");
    console.log("userName", userName);
    
    document.write("Food is the meaning of life - Somebody, somewhere. ")
    
    if (userName == null) {
        document.write("You pressed the cancel button. That's okay.");
    } else if (userName == "") {
        userName = prompt("Please enter your name again.");
        if (userName == null) {
        document.write("You pressed the cancel button. That's okay.");
      } else if (userName == "") {
          document.write("Hi stranger, it's good to be here.");
        } else {
            document.write("Hi " + userName + ", it's nice of you to be here.");
        }
    } else {
        document.write("Hi " + userName + ", it's nice of you to be here.");
    }
}


//   //lab 7 attempt 2, 1 input from user for userName
// function greetUser() {
//     const userName = prompt("What is your name?");
//     console.log("userName", userName);
  
//     document.write("Food is the meaning to life - Somebody, somewhere. ")

//     if (userName == null) {
//       document.write("You pressed the cancel button. That's okay.");
//     } else if (userName == "") {
//       document.write("Hi stranger, it's good to be here.");
//     } else {
//       document.write("Hi " + userName + ", it's nice of you to be here.");
//     }
//   }
//   //end of lab 7 attempt 2



//   // prior to lab 7 attempt 1
//   const userName = prompt("what is your name?")
//   console.log("userName", userName);
//   // string concatenation
//   // alert("Hi " + usersName +", it's nice of you to be here.")
  
//   document.write("Hi " + userName +", it's nice of you to be here.")
  
//   //if (this is true) {execute this code}
//   if (userName == "") {
//       document.write(" Hi stranger, it's good to be here.");
//   } else if (userName == null) {
//       document.write(" You've pressed the cancel button, that's okay.");
//   } else {
//       document.write(" You have your own name!?")
//   }
//   //end of lab 7 attempt 1



// 20000 milliseconds is 20 seconds
setTimeout(function() {
    alert("15 seconds have elapsed! I know you've just started to read, but you're awesome!");
  }, 20000); 



// function rateMyPage(){
//     let rating = prompt("how many stars would you rate my page? 1-5");

//     for (let i = 0; i < rating; i++){
//         document.write('Thanks for the ' + rating)
//     }
// }



function rateMyPage(){
    let rating = prompt("How many burgers would you rate my page? (1-5)");

    // Validate user input
    while (rating < 1 || rating > 5 || isNaN(rating)) {
        rating = prompt("Please enter a number between 1 and 5.");
    }

    for (let i = 0; i < rating; i++){
        document.write("<img class='loop-image' src='burger-rating.jpg'/>");
    }
}