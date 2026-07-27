// // ----- ARRAY METHODS -----

// // === INCLUDE ===

// // => finding flower in flowers

// const flowers = ["rose", "lily", "jasmine", "chambeli"]

// console.log(flowers.includes("jasmine"));
// console.log(flowers.includes("sunflower"));

// // === FOREACH ===

// // => har ek array value pr work krega

// const fruits = ["apple","mango","grapes","liche"]

// const arr = []

// let summerFruits=(fruit)=> {
//     arr.push(`Maze ka ${fruit}`);
// }

// fruits.forEach(summerFruits)
// console.log(arr);

// // ==> TASKS

// // 01
// const names = ["Ali", "Ahmed", "Sara", "Hafsa"];
// names.forEach(name => {
//    console.log(name);
// });

// // 02
// const numbers = [5, 10, 15, 20];
// numbers.forEach(number => {
//     console.log(number*2);
// })

// // 03
// const fruits = ["Apple", "Mango", "Banana"];
// fruits.forEach((value,index) => {
//     console.log(index,value);
// });

// // 04
// const prices = [100, 200, 500];
// prices.forEach(price => {
//     console.log(`${price} pkr`);
// })

// // 05
// const students = ["Ali", "Sara", "Ahmed"];
// students.forEach(student => {
//     console.log(`welcome ${student}`);
// })

// // === MAP ===

// // => use hoga jab koi array phly se bna hua hai hum chah rhy hain usky hr element kr operation perform ho

// const fruits = ["apple", "mango", "grapes", "liche"]

// let summerFruits = (fruit) => {
//     // console.log(`maze ka ${fruit}`);
//     return `50 rs ka ${fruit}`
// }
// console.log(fruits.map(summerFruits));

// // => TASKS

// // 01
// const numbers = [1, 2, 3, 4, 5];
// let doubleNumber = numbers.map(number => {
//     return number*2;
// })
// console.log(doubleNumber);

// // 02
// const numbers = [1, 2, 3, 4, 5];
// let doubleNumber = numbers.map(number => {
//     return number*number;
// })
// console.log(doubleNumber);

// // 03
// const names = ["ayesha", "sara", "hafsa"];
// let personNames = names.map(name => {
//     return name.toUpperCase()
// })
// console.log(personNames);

// // 04
// const names = ["ayesha", "sara", "hafsa"];
// let personNames = names.map(name => {
//     return `Hello ${name}`
// })
// console.log(personNames);

// // 05
// const students = [
//   {
//     name: "Sara",
//     marks: 90
//   },
//   {
//     name: "Hafsa",
//     marks: 95
//   }
// ];
// let studentNames = students.map(student => {
//     return student.name;
// })
// console.log(studentNames);

// // 05
// const products = [
//   {
//     name: "Laptop",
//     price: 50000
//   },
//   {
//     name: "Mobile",
//     price: 30000
//   }
// ];
// let devices = products.map(product => {
//     return `${product.name}-${product.price}`
// })
// console.log(devices);

// // === FILTER ===

// // => condition apply kr k answer dhoond k lata hai nay array main

// const numbers = [2, 6, 5, 3, 1, 8]
// let filteredNum = numbers.filter((number) => {
//     return number<6
// })
// console.log(filteredNum);

// ==> TASKS

// // 01
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let filteredNum = numbers.filter((number) => {
//     return number % 2 !==0
// })
// console.log(filteredNum);

// // 02
// const prices = [20, 80, 45, 100, 60];
// let filteredNum = prices.filter((number) => {
//     return number>50
// })
// console.log(filteredNum);

// // 03
// const names = ["Amna", "Zara", "Sara", "Hafsa", "Ayesha"];
// let filteredNames = names.filter((name) => {
//     return name.length > 4
// })
// console.log(filteredNames);

// // === SOME ===

// // => condition check krta hai agr ek bhi element se match hoti hai to TRUE de deta hai


// const num = [90,30,40,10,80]

// const numbers = num.some((item) => {
//     return item>40
// })

// console.log(numbers);

// // === EVERY ===

// // => condition check krta hai agr ek bhi element se match hoti hai to FALSE de deta hai

// const num = [90,30,40,10,80]

// const numbers = num.every((item) => {
//     return item<40
// })

// console.log(numbers);

// // === FIND ===

// // => condition true hone k baad first sirf index value deta hai

const num = [90,30,40,10,80]

const numbers = num.find((item) => {
    return item<40
})
console.log(numbers);