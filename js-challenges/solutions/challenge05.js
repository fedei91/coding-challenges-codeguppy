//Coding challenge #5: Calculate the sum of numbers from 1 to 10

//Without arrayList
/*
let totalSum = 1;

for (numCounter=1; numCounter<=10; numCounter++) {
    console.log(`${totalSum} + ${numCounter} = ${totalSum + numCounter}`);
    totalSum += numCounter;
}
*/

//With loop and arrayList
/*
let totalSum = 1;
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i=0; i<10; i++) {
    totalSum = totalSum + listaNumeros[i];
    console.log(totalSum);
}
*/