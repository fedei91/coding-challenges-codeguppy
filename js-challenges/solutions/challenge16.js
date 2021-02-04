//Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

function isPrime(num) {
    for (i=2; i<num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(isPrime(5));