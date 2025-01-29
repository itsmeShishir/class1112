console.log("hello world");
// how to create a variable
// let , var , const
let cameCase;
cameCase = 10;
console.log(cameCase);

var cameCase1; //initailized = default  = undefine
cameCase1 = "helllo"; //declare
console.log(cameCase1);

const cameCase2 = "once declareds value cannot be changed";
console.log(cameCase2);

// data type -> string, number, bool , null, undefine, array, object,
// 2 types of main data type ->
// primitive(string, numberm bool)
// and non primitive (array, object)
// type of -> which type
let datas = "hari";
console.log(typeof datas);
datas = 10;
console.log(typeof datas);
datas = 90.5;
console.log(typeof datas);
datas = true;
console.log(typeof datas);
datas = null;
console.log(typeof datas);
datas = [1, 2, 3];
console.log(typeof datas);
datas = {
  one: "hello",
};
console.log(typeof datas);
let undefine;
console.log(typeof undefine);

// operation and operands
// operation -> performe between 2 numbers
// openands -> number
// 2+2 = 2 is operands and operation is +
// type of operations
// arthmetic operations -> +,-, *,/, %
// asignment operatios -> =, +=, -=, /=, *=
// ternary operators -> condition check garna (condition) ? "if true" : "false";
// comparison operators -> >,< ,>=, <=, ==, ===, !=
// Logical  -> &&, ||, !
// arthmetic operations
console.log(5 + 5);
console.log(5 - 5);
console.log(5 / 5);
console.log(5 * 5);
console.log(5 % 5);
// asignment operatios
let assign = 1;
assign = 1;
console.log(assign);
assign -= 1;
console.log(assign);
assign *= 1;
console.log(assign);
assign /= 1;
console.log(assign);
assign %= 1;
console.log(assign);

// ternary operators
let age = 20;
let output =
  age >= 21
    ? console.log("he or she can drive")
    : console.log("he or she cannot drive");

// comparison operators -> >, <, >=, <= , !=, ==, ===
console.log(6 > 5);
console.log(5 < 6);
console.log(5 == "5");
console.log(5 === "5");
console.log(6 >= 5);
console.log(6 <= 5);
console.log(6 != 5);

// Logical -> &&, ||, !
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
// OR ||
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// NOT !
console.log(!true);
console.log(!false);

// Math -> pows, random,
let random = Math.random();
console.log(random * 100);

let pow = Math.pow(2, 5);
console.log(pow);

let sqrts = Math.sqrt(4);
console.log(sqrts);

let cbrts = Math.cbrt(27);
console.log(cbrts);

// Dates
let today = new Date();
console.log(today);
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getMinutes());
console.log(today.getMonth());

// date formating
console.log(today.toDateString());
console.log(today.toDateString());
