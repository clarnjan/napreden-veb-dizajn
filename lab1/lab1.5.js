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

        console.log(merge(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

const merge = function(a,b){
    let result=[]
    for(let i=0;i<a.length;i++){
        let temp=[a[i],b[i]]
        result.push(temp);
    }
    return result;

} // Write this function
