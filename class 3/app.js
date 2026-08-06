// // PREMITIVE AND NON-PREMITIVE/REFERENCE DATA TYPES
// // => primitive : change in one can not affect in other, value store in stack
// // => non-primitive : change in one can affect in other, value store in heep

// // ----- Premitive -----

// let num = 3;
// let num2 = num;

// console.log(`num before increment: ${num}`);
// console.log(`num2 before increment: ${num2}`);

// num++

// console.log(`num after increment: ${num}`);
// console.log(`num2 after increment: ${num2}`);

// // ----- Non-Premitive / Refrence -----

// let colors = ["red","green","blue","yellow"]
// let colors2 = colors

// colors2.push("pink")

// console.log("colors",colors);
// console.log("colors2",colors2);

// // ----- Cloning in arrays and objects -----

// // => Cloning ka matlab hai kisi reference type (Array ya Object) ki nayi independent copy banana, taake new copy mein changes karne se original data change na ho.
// // => Sirf reference copy hota hai.
// // => Isliye agar arr2 ya person2 ko change karoge to original bhi change ho jayega.
// // => Cloning ka purpose yehi hai ke new memory location ban jaye.

// let arr1 = ["red","green","blue"]
// let arr2 = ["pink", "purple", "orange"]

// arr2.push("grey")
// const arr2 = arr1.slice();
// const arr2 = Array.from(arr1);
// console.log(arr2);

// let arr3 = [...arr1,...arr2]
// console.log(arr3);

// const person={
//     name:"hafsa",
//     course: "web",
//     city:"karachi",
// }
// person.country = "pakistan"

// // => spread operator {... person} // aagy kuch bhi object ya array add hoga to ye help krta hai add krny main

// const person2 = {...person}

// console.log(person2 === person);
// console.log(person);
// console.log(person2);

// const person1 = {
//   name: "Ali",
//   age: 20
// };
// const person2 = {
//   ...person1
// };
// person2.age = 25;
// console.log(person1);
// console.log(person2);

// // object.asign()
// const person2 = Object.assign({}, person1);

// // ----- PROTOTYPE -----

// // => array/function k pas free ka space hota hai jis se hum key value pair add kr skty hain.

// function greetings() {
//     console.log("hello kia haal chal hain");
// }
// greetings.prototype.city = "karachi"

// console.log(greetings.prototype);
// greetings()

// let arr = [1, 2, 3, 4]

// console.log(Object.getPrototypeOf(arr));

// // => hasOwnProperty() JavaScript ka ek Object method hai jo check karta hai ke koi property object ki apni hai ya inheritance (prototype) se aayi hai.

// // => agr object ki apni property hogi to *true*
// // => agr property prototype se ai hui hogi to *false*

// const student = {
//   name: "Hafsa",
//   age: 20
// };

// console.log(student.hasOwnProperty("name"));
// console.log(student.hasOwnProperty("age"));
// console.log(student.hasOwnProperty("marks"));

// // ----- For OF,In,Each Methods -----

// // For OF

// const fruits = ["Apple", "Mango", "Banana"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // For In

// const student = {
//   name: "Ali",
//   age: 20,
//   marks: 90
// };
// for (const key in student) {
//   console.log(key, student[key]);
// }

// // For Each

// const fruits = ["Apple", "Mango", "Banana"];
// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

// // ----- MAP DATA STRUCTURE -----

// // => jab hum chah rhy hon k aany wali key ki datatype hamary according ho
// // => 1,map ki key kisi bhi datatype ki ho skti hai
// // => 2,loop chl skta hai
// // => 3,order is not in alphabetical series / jis order se hum keys dengy wohi order output main rahy ga

// const student = {
//   name: "ayesha",
//   age: 14,
//   marks: 90
// };

// const student2 = new Map();
// student2.set("name", "hafsa");
// student2.set("city", "karachi");
// student2.set(["item1", "item2"], "one");

// console.log(student2);
// console.log(student2.get("name"));

// for (let [key, value] of student2) {
//   console.log(typeof key);
//   console.log(Array.isArray(key));
//   console.log(student2.size);
// }

// // => shortest way
// const student2 = new Map([["name","hafsa"],["city","karachi"],["country","pakistan"]])
// console.log(student2);

// // =>TASKS

// const person = new Map()
// person.set("Ali",80)
// person.set("Sara",95)
// person.set("Ahmed", 70)
// console.log(person);
// person.set("Hafsa", 100)
// console.log(person);
// console.log(person.get("Sara"));
// console.log(person.has("Ahmed"));
// // person.delete("Ali")
// console.log(person);
// console.log(person.has("Ali"));
// console.log(person.size);
// console.log(person.keys());
// console.log(person.values());

// for (let [key,value] of person) {
//     console.log(`${key} : ${value}`);

// }
// person.set("Sara",98)
// console.log(person);

// const students = new Map([
//   ["Hafsa", 100],
//   ["Ayesha", 89],
//   ["Amna", 65],
//   ["Zara", 80],
// ]);
// console.log(students);

// // ---------- Highest Marks
// let highestMarks = -Infinity
// let topStudent = ""
// for (const [name, marks] of students) {
//     if (marks > highestMarks) {
//         highestMarks = marks
//         topStudent = name
//     }
// }
// console.log(`${topStudent} : ${highestMarks}`);

// // ---------- Lowest Marks
// let lowestMarks = Infinity
// let lowestStudent = ""
// for (const [name, marks] of students) {
//     if (marks < lowestMarks) {
//         lowestMarks = marks
//         lowestStudent = name
//     }
// }
// console.log(`${lowestStudent} : ${lowestMarks}`);

// // ---------- Average Marks
// let total = 0;
// for (const marks of students.values()) {
// total += marks;
// }
// let average = total / students.size
// console.log(average);

// ====> Objects

// const user1 = { name: "Ali" };
// const user2 = { name: "Sara" };
// const user = new Map([
//   [user1.name, 20],
//   [user2.name, 18],
// ]);
// console.log(user);
// console.log(user.get(user1.name));

// const country1 = { city: "Pakistan" };
// const country2 = { city: "Turkey" };
// const country3 = { city: "Japan" };

// const capital = new Map([
//   [country1.city, "Islamabad"],
//   [country2.city, "Ankara"],
//   [country3.city, "Tokyo"],
// ]);
// console.log(capital);

// console.log(capital.get(country1.city));
// console.log(capital.get(country2.city));
// console.log(capital.get(country3.city));

// const words = [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple"
// ];

// const wordCount = new Map();

// for (const word of words) {

//   if (wordCount.has(word)) {
//     const count = wordCount.get(word);
//     wordCount.set(word, count + 1);
//   }
//   else {
//     wordCount.set(word, 1);
//   }

// }

// for (const [word, count] of wordCount) {
//   console.log(word, count);
// }

// const students = new Map([
//   ["Ali", 80],
//   ["Sara", 95],
//   ["Hafsa", 100]
// ]);

// const arr = [...students];

// console.log(arr);

// const arrName = [...students.keys()]
// console.log(arrName);

// const arrValue = [...students.values()]
// console.log(arrValue);

// // ----- Iterators and Generators -----

// // Iterators works on Arrays
// // Generators works on Function

// // ---------- Iterators ----------
// // Iterator ek object hota hai jo values ko one by one return karta hai.
// // output main 2 properties use hoti hain
// // 1 value-Array ya element ki current value btata hai.
// // 2 done-Batata hai iteration complete hui ya nahi(true,false).

// const fruits = ["Apple", "Mango", "Banana"];
// const iterator = fruits[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // ==> Tasks

// const student = {
//   name: "Ali",
//   age: 20,
//   city: "Karachi"
// };

// const iterator = student[Symbol.iterator]()
// console.log(iterator.next());

// // ---------- Generator ----------
// // Generator ek special function hota hai jo values ko pause aur resume kar sakta hai.

// function* greet() {
//   yield console.log("hello world");
//   console.log("hello Webdevelopment");
//   yield console.log("hello Javascript");
// }
// const greetings = greet();

// console.log(greetings.next());
// console.log(greetings.next());
// console.log(greetings.next());

// const students = [
//   {
//     name: "Ali",
//     marks: 80,
//   },
//   {
//     name: "Sara",
//     marks: 95,
//   },
//   {
//     name: "Ahmed",
//     marks: 70,
//   },
//   {
//     name: "Hafsa",
//     marks: 100,
//   },
// ];

// let totalMarks = 0;
// for (const mark of students) {
//   totalMarks += mark.marks;

// }
// console.log(totalMarks);

// let avgMarks = totalMarks / students.length;
// console.log(avgMarks);

// let highestMarks = -Infinity
// for (const mark of students) {

// if (mark.marks >highestMarks) {
//     highestMarks = mark.marks;
// }
// }
// console.log(`Highest Marks: ${highestMarks}`);


// // ---------- Higher Order Function ----------

function outer(callback) {
    console.log("outer function");
    function innerMost() {
        console.log("innerMost function");   
    }
    return innerMost()
}
// function inner() {
//     console.log("inner function");
// }
 outer()