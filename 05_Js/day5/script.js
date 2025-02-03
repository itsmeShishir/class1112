// // oop -> object orienter programming
// // class -> template, blueprint
// // object -> instance of class
// // constructor -> special method called when object is created
// // methods -> function inside class
// // properties -> variable inside class

// // 4 pillars of oop -> inheritance, polymorphism, encapsulation, abstraction
// // inheritance -> parent class -> child class
// // polymorphism -> many forms -> overloading, overriding
// // encapsulation -> binding or hidding  data with methods
// // abstraction -> hiding implementation details

  

// // inheritance -> parent class -> child class
// class parent{
//     constructor(name){
//         this.name = name;
//     }
//     getinfo(){
//         console.log(⁠ Name: ${this.name} ⁠);
//     }
// }

// class child extends parent{
//   constructor(name, cname, phone ){
//     super(name);
//     this.cname = cname;
//     this.phone = phone;
//   }

//   getinfo(){
//     super.getinfo();
//     console.log(⁠cname: ${this.cname} ⁠);
//     console.log(⁠ Phone: ${this.phone} ⁠);
//   }
// }

// let house1  = new child('House1', 'Kathmandu', 123456);
// let house2  = new child('House2', 'Butwal', 23456);
// house1.getinfo();
// house2.getinfo();

// // encapsulation -> binding or hidding  data with methods
// class hidding{
//   constructor(name, age){
//     this.age = age;

//     let _name = name;
//     this.getname = function(){
//       return _name;
//     }
//     this.setname = function(name){
//       _name = name;
//     }
//   }

// }
// obj1 = new hidding('Ram', 23);
// console.log(obj1.name);
// console.log(obj1.age);
// obj1.setname("shyam");
// console.log(obj1.getname());

// // abstraction -> hiding implementation details
// class makeCoffee{
//   constructor(){
//     this._fetchwater();
//     this._boilwater();
//     this._addcoffee();
//     this._addsugar();
//     this._coffeeready();

//   }
//   _fetchwater(){
//     console.log('Fetching water...');
//   }
//   _boilwater(){
//     console.log('boil water...');
//   }
//   _addcoffee(){
//     console.log('adding coffee...');
//   }
//   _addsugar(){
//     console.log('adding sugar...');
//   }
//   _coffeeready(){
//     console.log('coffee ready...');
//   }
// }


// let coffee = new makeCoffee();