//Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

//Reminder: Fn = Fn-2 + Fn-1

const f0 = 0;
const f1 = 1; 
const termsToCalculate = 10;
let firstTenNumbers = [];

function fibonacci() {
    for (i=0; i<termsToCalculate; i++) {
        console.log(f0);
        let newNumber = f0 + f1;
        f0 = f1;
        f1 = newNumber;
    }
}

console.log(fibonacci(10));
