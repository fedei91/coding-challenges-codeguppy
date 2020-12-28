//Coding challenge #6: Calculate 10!

let n = 10;
let factorialSum = 1;

while (n > 0) {
    factorialSum *= n;
    n -= 1;
}

console.log(factorialSum);