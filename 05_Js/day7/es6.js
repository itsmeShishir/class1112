// es6 -> 2015 -> ECMAScript 6 
//  let, const, arrow function, template string, 
// destructuring, spread operator, rest operator, 
// promise, async await, import export, default parameter, 
// class, class inheritance, module,
//  map, filter, reduce, find, findIndex, some, every,
//  includes, indexOf, lastIndexOf, slice, splice,

// let and const 
let a = 10
console.log(a);

const b = 10;
console.log(b);

// arrow function
// with parameter and without paramenter
let abc = () =>{
  return "hello from arrow";
}
console.log(abc());

let abcd = (a,b) =>{
  return a+b;
}
console.log(abcd(10,70));

// template string, ``
console.log("5" + " + " +"6");
console.log(`${a} + 6 `);
let ab = `
    this is a variable ${a}
`;
// destructuring -> array, and object 
let ai = [10,2,3,4,5]
let [g,h,c,d,e] = ai;
console.log(g);
console.log(h);
console.log(c);
// object 
let aob = {
  name: "hari",
  age: 10
}
let {name, age} = aob 
console.log(name);
console.log(age);

// ...parameter -> destructurog
let desc = [1,2,3,4,5]
let desc2 = [6,7,8,9,10]
console.log(...desc, ...desc2);

// promise, async await,
console.log("es6.js");
// promise, async await,
let promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("hello from promise");
    }, 3000);
  })
  promise.then((data) =>{
    console.log(data);
  })

let data = async () =>{
    try{
      let result = await fetch("https://jsonplaceholder     .typicode.com/posts");
      let datas = await result.json();
      console.log(datas);
    }catch(e){
      console.log(e.message);
    }
}  
data();

console.log("end of the file");


  
