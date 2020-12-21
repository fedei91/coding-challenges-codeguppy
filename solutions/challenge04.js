//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (tableCounter=1; tableCounter<=10; tableCounter++) {
    console.log(`Multiplication table for ${tableCounter}`);

    for (numberCounter=1; numberCounter<=10; numberCounter++) {
        var table = tableCounter * numberCounter;
        console.log(`${tableCounter} * ${numberCounter} = ${tableCounter * numberCounter}`);
    };
};
