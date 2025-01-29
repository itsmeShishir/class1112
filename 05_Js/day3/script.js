// user define function
function abc() {
  console.log("hello world");
}
abc();
// function type -> 4 types of function
// 1. function with no Parameter and no return type
// 2. function with  Parameter and no return type
// 3. function with  Parameter and  return type
// 4. function with no Parameter and return type

// 1. function with no Parameter and no return type
function NPNR() {
  console.log("function with no Parameter and no return type");
}
console.log(NPNR());

// 2. function with  Parameter and no return type
// scope in js -> global scope and local scope
function PNR(a, b) {
  console.log("function with  Parameter and no return type");
  console.log(a + b);
}
PNR(10, 20);

// 3. function with  Parameter and  return type
function PR(a, b) {
  console.log("function with  Parameter and return type");
  return a + b;
}
console.log(PR(10, 20));
//4. function with no Parameter and return type
function NPR() {
  console.log("function with no Parameter and return type");
  return "hello world";
}
console.log(NPR());

// parameter type -> 3 types of parameter (..., formal , default)
function parameterspread(z, ...a) {
  console.log(a, z);
}
parameterspread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function parameterformal(a, b, c) {
  console.log(a, b, c);
}
parameterformal(1, 2, 3);

function parameterdefault(a, b, c = 30) {
  console.log(a, b, c);
}
parameterdefault(1, 2);
parameterdefault(30, 10);

// annonymous function -> function without name
let annonymous = function () {
  console.log("annonymous function");
};
annonymous();

// arrow function -> function with arrow =>
let arrow = (a, b) => {
  console.log("arrow function");
  return a + b;
};
console.log(arrow(10, 20));

// object in js
let obj = {
  key: "value",
  name: "hari",
  email: "hari@gmail.com",
};

console.log(obj["name"]);
obj["name"] = "ram";
console.log(obj["name"]);

/*
Write a program in Js to print your own name using function.
Write a program in Js to print even numbers between intervals using function.
Create a function called greet that takes a name as an argument and prints a greeting message. For example, greet(“John”) should print “Hello, John”.
Write a program in Js that find the area of a circle using function. Formula: pi * r * r
Write a program in Js to reverse a String using function.(.reversed).join()
Write a program in Js to calculate power of a certain number. For e.g 5^3=125
wap in js that get me the multiplication table of the 5*1 = 5 to 5*10 = 50
wap in js that get me the multiplication table of the 1*1 = 1 to 10*10 = 100
*/
// 0 100 _. even number
function allevennumber(i, j) {
  for (i; i <= j; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
allevennumber(10, 20);

