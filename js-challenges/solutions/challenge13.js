//Coding challenge #13: Find the maximum number in an array of numbers

function seekMaxNum(randomArray) {
    var maxNum = 0;

    for (i=0; i<randomArray.length; i++) {
        if (randomArray[i] > maxNum) {
            maxNum = randomArray[i];
        }
    }
    return maxNum;
}

var randomArray = [0, 3, 10, 101, -51, 2, 1, 99, 59];
console.log(seekMaxNum(randomArray));
