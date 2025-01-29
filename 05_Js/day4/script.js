// array -> collection of data
// let arr = []
// let arr  = new Array()
let arrs = [1, 2, 3, 4, 5]; //index -> 0 to n-1
console.log(arrs);
console.log(arrs[0]);
console.log(arrs[1]);
console.log(arrs[2]);
console.log(arrs[3]);
console.log(arrs[4]);
console.log(arrs.length);
console.log(arrs.indexOf(5));
console.log(arrs.indexOf(1));
arrs[0] = 10;
console.log(arrs);

// arrays methods -> push , pop , shift , unshift, splice, slice, reverse
console.log(arrs.reverse());
console.log(arrs.push(6));
console.log(arrs);
console.log(arrs.pop());
console.log(arrs);
console.log(arrs.unshift(6));
console.log(arrs);
console.log(arrs.shift());
console.log(arrs);
// console.log(arrs.slice(0,4));
// console.log(arrs.splice(2, 2 ));

// Array iternation -> loop -> map , foreach, filter, reducer, find
let abc = arrs.map((items, index) => {
  return items * 2;
});
console.log(abc);

arrs.forEach((manish, index) => {
  console.log(manish > 2, index * 2);
});

arrs.filter((manish, index) => {
  console.log(manish > 3, index * 2);
});

let sum = arrs.reduce((manish, indexs) => {
  return manish + indexs;
}, 0);

// sums();
// function sums() {
//   console.log("hello sum");
// }
// sums();

// concat
let arr1 = [1, 2, 3];
let arr2 = ["hari", "ram", "shyam"];
console.log(arr1.concat(arr2));
// multiplication table of 5 *1 = 5 to 5*10 = 50
for (let i = 0; i <= 10; i++) {
  console.log(`5 * ${i}=  ${5 * i}`);
}

// nested loop
for (let i = 0; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} =  ${i * j}`);
  }
}

// oop -> object orienter programming
// class -> template, blueprint
// object -> instance of class
// constructor -> special method called when object is created
// methods -> function inside class
// properties -> variable inside class

class CivilHouse {
    // properties
    housenumber;
    age;
    constructor(housenumber, age){
      this.housenumber = housenumber;
      this.age = age;
    }
    // methods 
    geet(){
      console.log(`housenumber is ${this.housenumber} and age is ${this.age}`);
    }
  }
  // object -> instace of a class
  let obj = new CivilHouse(10,30);
  obj.geet()
  
  let obj1 = new CivilHouse(40, 50);
  obj1.geet()
  
  let obj3 = new CivilHouse(70, 1);
  obj3.geet()
  


