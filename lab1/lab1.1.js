'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    p1 = p1.split(", ")

    console.log(incrementItems(p1))

    rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function incrementItems(p) { // Write this function
    var p1=[];
    for(var i=0;i<p.length;i++){
        p1.push(parseInt(p[i])+1);
    }
    return p1;
}
