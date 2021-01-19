//Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

//Iterative version reminder
/*
let f0 = 0;
let f1 = 1; 

function f(n) {
    for (i=0; i<n; i++) {
        let newNumber = f0 + f1;
        f0 = f1;
        f1 = newNumber;
    }
  console.log(f0);
}

f(n);
*/

function f(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return f(n - 2) + f(n - 1);
}

console.log(f(n));
