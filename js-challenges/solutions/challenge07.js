//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

let totalSum = 0;

for (i=10; i<30; i++) {
    if (i % 2 != 0) {
        totalSum += i;
    }
}

console.log(totalSum);
