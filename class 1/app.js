// // ----- Variables ------
// console.log("---CLASS 1-Part-1---");

// // => var, let, const => Keywords

// // === VAR ===

// // => redeclaration in var is allowed
// // => reassignment in var is allowed

// var studentName = "hafsa"
// var studentName = "ayesha"
// studentName = "usman"
// console.log(studentName);

// // === LET ===

// // => redeclaration in let is not allowed
// // => reassignment in let is allowed

// let color = "red"
//  color = "green"
// console.log(color);

// // === CONST ===

// // => redeclaration in const is not allowed
// // => reassignment in const is not allowed

// const fruit = "apple"
// // fruit = "orange"
// console.log(fruit);

// ----- SCOPE -----
// // => {
// // =>   Block Scope
// // => }

// // Global Scope

// // => var -- global/function scope
// // => function k ander agr variable bnaya to bahr access nhi kr skty
// // => baki if loop wagera main access kr sakty hain

// function number() {
//     var num = 10
//     console.log(num);
// }

// number()
// console.log(num);  // error

// for (let i = 1; i < 2; i++) {
//     var user = "abdullah";

// }

// console.log(user); // accessable

// // ----- DESTRUCTURING ------
// console.log("---CLASS 1-Part-2---");

// // ARRAYS

//                // Destructuring  // Nested Desturucturing
// const fruits = ["apple", "mango", ["peach"]];

// => let fruit1 = friut[0]
// => let fruit2 = friut[1]

// let [fruit1, fruit2, [fruit3]] = fruits;

// fruit1  = "banana"

// console.log(fruits);
// console.log(fruit1);

// // OBJECTS

// const person = {
//   name: "hafsa",
//   course: "web",
//   city: "karachi",
//   // nested object
//   address: {
//     streetNo: 54,
//   },
// };

// // => let personName = person.name

// let {
//   city: myCity,
//   course,
//   name,
//   address: { streetNo: myStreet },
// } = person;

// console.log(myCity);
// console.log(myStreet);
