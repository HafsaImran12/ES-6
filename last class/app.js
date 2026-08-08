// // ---------- CODE EXECUTION ----------
// // ---------- HOISTONG ----------

// // hoisting: variable declaration se phle access krna

// // it returns value UNDEFINED

// // Variable:

// x = 3;
// console.log(`X = ${x}`);
// var x = 10;

// x = 3;
// console.log(`Value of X1 is ${x}`);
// var x = 10;
// console.log(`Value of X2 is ${x}`);

// // Function:

// greet();

// function greet() {
//   console.log("hello user");
// }

// // practice:

// console.log("Global Execution Context Start");

// var globalVariable = "I am a Global Variable";

// function globalFunction() {
//     console.log("Inside a Global Context");
// }

// console.log(globalVariable);

// globalFunction();

// console.log("Global Execution ends");

// // TDZ = TEMPORAL DEAD ZONE: variable declaration se phle wala part (in Let or Const)

// // let or const main hoisting hoti hai bcz of TEMPORAL DEAD ZONE (TDZ) variable declaration se phle

// // it returns value REFRENCE ERROR

// console.log(`x = ${x}`);
// let x = 3;

// // ==> TASKS

// // 01
// console.log(a);
// var a = 10; // 10

// // 02
// console.log(a);
// let a = 10; // error

// // 03
// sayHello();
// function sayHello() {
//   console.log("Hello");
// } // Hello

// // ---------- CALL STACK ----------

// // STACK: (LIFO)= last in first out
// // CALL STACK: jo function sb se last mai stack mai jata hai wo sb se phle bahr aata hai

// function first() {
  //   console.log("First");
  // }
// function second() {
  //   first();
  //   console.log("Second");
  // }
  // second();
  
  
  
// // ---------- SYNCHRONOUS VS ASYNCHRONOUS ----------
  
console.log("Script Start");
setTimeout(() => {
  console.log("Inside setTimeOut function");
}, 0);
console.log("Script End");

