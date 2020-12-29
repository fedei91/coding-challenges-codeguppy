//Calculate the sum of numbers in an array of numbers

//implement function into solution
function sumArray(randomArray){
    for (i=0; i<randomArray.length; i++) {
        //calculate the sum of it's numbers
        totalSum += randomArray[i];
    }
    return totalSum;
}

let count = 0;
let totalSum = 0;
let randomArray = [];

while (count < 10) {
    let randomNumber = parseInt(prompt('Enter a random number'));
    randomArray.push(randomNumber);
    count++;
}

console.log(sumArray(randomArray));

/*
//first fill an array
let count = 0;
let totalSum = 0;
let randomNumber = 0
let randomArray = [];

while (count < 10) {
    randomNumber = Math.floor(Math.random() * 10);
    randomArray.push(randomNumber);
    count++;
}

//go through the array
for (i=0; i<randomArray.length; i++) {
    //calculate the sum of it's numbers
    totalSum += randomArray[i];
}

//show the result
console.log(totalSum);
*/
