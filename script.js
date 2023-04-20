'use strict';

console.log ("I am in the HTML")
alert("Welcome to my page")

const userName = prompt("what is your name?")
console.log("userName", userName);
// string concatenation
// alert("Hi " + usersName +", it's nice of you to be here.")

document.write("Hi " + userName +", it's nice of you to be here.")

//if (this is true) {execute this code}
if (userName == "") {
    document.write(" Hi stranger, it's good to be here.");
} else if (userName == null) {
    document.write(" You've pressed the cancel button, that's okay.");
} else {
    document.write(" You have your own name!?")
}

setTimeout(function() {
    alert("15 seconds have elapsed! I know you've just started to read, but you're awesome!");
  }, 15000); // 15000 milliseconds is 15 seconds