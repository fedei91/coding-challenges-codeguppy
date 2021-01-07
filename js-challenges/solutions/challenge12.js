/*Create a function that receives an array of numbers as argument and returns an 
array containing only the positive numbers*/

let randomArray = [1, 50, 66, -17, -83, 69, -5, 1, 10, -99];
let positiveNumberArray = [];

function receiveArray(randomArray) {
    for (i=0; i < randomArray.length; i++) {
        if (randomArray[i] >= 0) {
            positiveNumberArray.push(randomArray[i]);
        };
    }
    return positiveNumberArray;
}

console.log(receiveArray(randomArray));
