//Coding challenge #11: Calculate the average of the numbers in an array of numbers

//create an array list
randomArray = [];
let totalAverage = 0;
let count = 0;

while (count < 10) {
    let randomNumber = parseInt(prompt('Enter a random number'));
    randomArray.push(randomNumber);
    count++;
    totalAverage += randomNumber;
}

//console.log(randomArray);

function calculateAverage(totalAverage, randomArray) {
    return totalAverage / randomArray.length;
}

console.log(calculateAverage(totalAverage, randomArray));