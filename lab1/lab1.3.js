'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    p1 = Number(p1)

    console.log(howManyStickers(p1))

    rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function howManyStickers(numberOfLines) { // Write this function
    return numberOfLines*numberOfLines*6;
}




