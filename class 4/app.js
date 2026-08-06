// // CLOSURE, HOISTING, MODULES

// //  ---------- LEXICAL Scope / Environment ----------

// // => (run) function call krna ya invoke krna

// // => scope alg alg hain isi liye variable ek hi naam se bna lia

// let variable = "my variable"
// function outer() {
//     function inner() {
//         // ye variable outer function main define hai to ye iska lexical scope hai
//         console.log(variable);
//     }
//     inner()
//  }

// outer()  // invoke
 
// // HIGHER ORDER FUNCTION = esa function jo dusra function as an argument recieve kre 

// function first(fName){

//     return function second() {
//         console.log(`Hello ${fName}`);
        
//     }

// }
// let result = first("hafsa")
// result()
