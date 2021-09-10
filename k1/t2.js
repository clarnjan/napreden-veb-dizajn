
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

function select(o1,o2){
    console.log(o1)
    console.log(o2)
    for (const [key, value] of Object.entries(o2)) {
        if(o1[key]==null)
            o1[key]=value;
    }
    return o1;
}
