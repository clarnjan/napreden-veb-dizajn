'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    rl.question('', (p2) => {
        p2 = p2.split(", ")
        p1 = JSON.parse(p1);

        console.log(select(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE

// Write your solution here!!!
var select = function (o,a){
    var x={};
    for(let i=0;i<a.length;i++){
        x[a[i]]=o[a[i]];
    }
    return x;
}