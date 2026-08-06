// // CODE EXECUTION

x = 3;
console.log(`Value of X1 is ${x}`);
var x = 10;
console.log(`Value of X2 is ${x}`);

// // practice

console.log("Global Execution Context Start");

var globalVariable = "I am a Global Variable";

function globalFunction() {
    console.log("Inside a Global Context");
}

console.log(globalVariable);

globalFunction();

console.log("Global Execution ends");
