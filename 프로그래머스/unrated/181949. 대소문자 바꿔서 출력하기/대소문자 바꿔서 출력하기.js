const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    s = str.split("").reduce((acc,cur)=>cur===cur.toUpperCase() ? acc+=cur.toLowerCase() : acc+=cur.toUpperCase(),"")
    console.log(s)
});