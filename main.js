// -----------JavaScript Strict Mode
/*"use strict"
x=3.1416;
console.log(x);*/


// --------let and const for variable Declaration

/*let a = 10;
a = 20;
console.log(a);*/

/*const a =10;
a=20;
console.log(a);*/


// ----------Arrow Functions

/*function MyFun(a, b){
  return a+b;
}*/

// const MyFunArrow = (a, b) => a+b;

// console.log(MyFun(3,4));
// console.log(MyFunArrow(3, 4));


// -----------Template Literals
/*let myAge = 33;
// let mySelf = "My age is "+myAge;
let mySelf = `My age is ${myAge}`
console.log(mySelf);*/


// Array Destructuring

// const arr=[1, 2, 3];
// const [a, b, c]=arr;
// console.log(a+b);


// Object Destructuring(Property name have to be the variable name)

// const person = {
//   name:"Jhon",
//   age:23,
//   city:"Dhaka"
// }
// const {name, age, city}=person;

// console.log(city);


// ------------Nested Destructuring

// const user={
//   name:"Bob",
//   age:30,
//   parent:{
//     father:"Jack",
//     mother:"Rose",
//   }
// }

//const {name, age, parent}=user;
//console.log(parent['mother']); // ----Third party Object Fetching;
//console.log(parent.mother); // ----Object Inside the Code;


// const{name,age,parent:{father,mother}}=user;
// console.log(mother);