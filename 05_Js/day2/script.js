// condition -> if, else, else if, switch
let age = 18;
// if -> condition true
// if (cnodition){body} else{}
// wap to check if he is above 18
if (age > 18) {
  //false
  console.log("he or she is above 18");
} else {
  console.log("he or she is not 18");
}

if (age > 18) {
  //true
  console.log("he or she is above 18");
} else if (age == 18) {
  console.log("wait for 1 year to drive and drink");
} else {
  console.log("he or she is not 18");
}
console.log("output");

// wap to check if the number of student his grade
//  is B find the marks-> A+= 100 to 90, A  = 89 to 80

let today = new Date();
let day = today.getDay();
console.log(day);

switch (day) {
  case 0:
    console.log("today is sunday");
    break;
  case 1:
    console.log("today is monday");
    break;
  case 5:
    console.log("today is friday");
    break;
  case 6:
    console.log("Today is saturday");
    break;
  default:
    console.log("none of the above");
}

// Loop -> loop -> for , while , do while -> for
// for(initialization, condiotion, increment and decrement){body}
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    continue;
  }
  // if (i==4){
  //   break;
  // }
  console.log(i);
}

let i = 0;
// while(condition){body}
while (i <= 10) {
  console.log(i);
  i++;
}
i = 0;

// dowhile-> do{body}while(condition)
do {
  console.log(i);
  i++;
} while (i <= 10);

/*

Write a program that checks if a person is eligible to vote based on their age.
(use if else)
Write a program that determines the day of the week based on a numeric
day value (1-7). (use Switch case)
Write a program that assigns a letter grade based on a numerical score.( use
if, elseif, else)
Write a program that identifies the season based on the month of the year.(
switch or if, elseif, else)
Write a program that checks if a given number is even or odd. (if condition)
Write a program that compares two numbers and determines which one is
greater, smaller, or if they are equal.(comparison operation with if, else)
Write a program that assesses the strength of a password based on its
length and content. (/[A-Z]/.test(password) && /[0-9]/.test(password))
Write a program that classifies a person into age groups (Child, Teenager,
Adult, Senior) based on their age. (use if else if else)
Js Loops 3
Write a program that determines the weather condition (Hot, Warm, Cool,
Cold) based on the temperature. (use if else condition)
Write a program that validates if a given email address contains both "@"
and ".
"
*/

// function -> a block of code executed when it name is called
// type of fun -> 2 types user define and in build-> print()/log()/alert()

// alert("hello");
// print()



