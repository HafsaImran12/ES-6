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

// // ==> TASKS

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

// const num = [90,30,40,10,80]

// const numbers = num.find((item) => {
//     return item<40
// })
// console.log(numbers);

// // === REDUCE ===

// // => array k sary element ko combine kr k ek single value return krta hai
// // => default initial value in sum(+) = 0
// // => default initial value in product(*) = 1

// const numbers = [3,4,5,1]

// console.log(
// numbers.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue;
// },3));

// // accumulator   currentValue    total

// //      3             3            6
// //      6             4            10
// //      10            5            15
// //      15            1            16

// // ==> TASKS

// // 01
// const multiplyNums = [2, 3, 4, 5];
// console.log(multiplyNums.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
// }));

//  1      2        4
//  4      3        6
//  6      4        24
//  24     5        30

// // 02
// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 95 },
//   { name: "Ahmed", marks: 70 },
//   { name: "Hafsa", marks: 90 }
// ];

// console.log(students.reduce((accumulator,currentValue) => {
//     return accumulator+currentValue.marks;
// }));

// acc     cVal     total
//  0        80       80
// 80        95       175
// 175       70       245
// 245       90       335

// // 03
// const numbers = [45, 12, 78, 23, 99, 5];
// const min = numbers.reduce((accumulator,currentValue) => {
//   if (currentValue < accumulator) {
//     return currentValue
//   }
//    return accumulator
//  });
// console.log(min);

// acc          cval         total/return
// 45             12             12
// 12             78             12
// 12             23             12
// 12             99             12
// 12             5              5

// // 04
// const numbers = [45, 12, 78, 23, 99, 5];
// const max = numbers.reduce((accumulator,currentValue) => {
//   if (currentValue > accumulator) {
//     return currentValue
//   }
//    return accumulator
//  });
// console.log(max);

// // 05
// const fruits = ["Apple", "Mango", "Banana", "Orange"];

// let totalEl = fruits.reduce((accumulator, currentValue) => {
//     return accumulator+1
// },0);

// console.log(totalEl);

// // 06
// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 95 },
//   { name: "Ahmed", marks: 70 },
//   { name: "hamna", marks: 90 }
// ];

// let totalMarks = students.reduce((accumulator, currentValue) => {
//   return accumulator+currentValue.marks
// },0)
// console.log(totalMarks);

// // 07
// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 90 },
//   { name: "Ahmed", marks: 70 },
//   { name: "amna", marks: 60 }
// ];
// let totalMarks = students.reduce((accumulator,currentValue) => {
//   return accumulator + currentValue.marks
// }, 0)
// let avgMarks = totalMarks/students.length
// console.log(avgMarks);
// let highestMarks = students.reduce((accumulator,currentValue) => {
//   if (currentValue.marks > accumulator.marks) {
//     return currentValue;
//   }
//   return accumulator
// })
// console.log(highestMarks);

// // 08
// const employees = [
//   { name: "Ali", salary: 50000 },
//   { name: "Sara", salary: 65000 },
//   { name: "Ahmed", salary: 45000 }
// ];
// const totalSalary = employees.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.salary;
// },0)
// console.log(totalSalary);

// // 09
// const words = ["HTML", "CSS", "JavaScript"];
// const totalWords = words.reduce((accumulator,currentValue) => {
//   return accumulator + currentValue.length
// },0)
// console.log(totalWords);

// // 10
// const words = ["cat", "elephant", "lion", "javascript"];
// const longestWord = words.reduce((accumulator,currentValue) => {
//   if (currentValue.length > accumulator.length) {
//       return currentValue
//   }
//   return accumulator
// })
// console.log(longestWord);

// acc       cval             total
// 3            8               8
// 8            4               8
// 8            10              10

// // 11

// const numbers = [2, 5, 8, 11, 14, 17, 20];

// const evenNumbers = numbers.reduce((accumulator,currentValue) => {
//   if (currentValue % 2 === 0) {
//     return accumulator+1
//   }
//   return accumulator
// },0)
// console.log(evenNumbers);

// // 12
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// const oddNumbers = numbers.reduce((accumulator,currentValue) => {
//   if (currentValue % 2 !== 0) {
//     return accumulator+1
//   }
//   return accumulator
// },0)
// console.log(oddNumbers);

// // === SORT ===
// // kisi bjhi chiz ko series main krna
// // assending ya decending order mainj tarteeb dena

// const fruits = ["Mango", "Apple", "Banana","kiwi"];

// fruits.sort();

// console.log(fruits);

// // 01
// const numbers = [8, 3, 12, 1, 9];
// numbers.sort((a, b) => {
//   return a-b
// })
// console.log(numbers);

// // 02
// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 95 },
//   { name: "Ahmed", marks: 70 },
//   { name: "Hafsa", marks: 90 }
// ];
// const studentByMarks = students.sort((a,b) => {
//   return b.marks-a.marks
// })
// console.log(studentByMarks);

// // 03
const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Quetta",
  "Peshawar"
];

const bySeries = cities.sort((a,b) => {
   return a.length-b.length
})
console.log(bySeries);
