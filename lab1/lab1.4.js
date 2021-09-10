'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    rl.question('', (p2) => {
        p1 = p1.split(", ")
        p2 = p2.split(", ")

        console.log(hasSameBread(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function hasSameBread(firstArr,secondArr) { // Write this function
    if(firstArr[0]==secondArr[0] && firstArr[firstArr.length-1]==secondArr[secondArr.length-1])
        return true;
    return false;

}

