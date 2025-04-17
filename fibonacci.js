const prompt = require('prompt-sync')();

function fibs(num){
    if (num <= 0) {
        return 'Enter a valid number 😑 ';
    }
    let a = 0;
    let b = 1;
    const arr = []
    if(num === 1){
        arr.push(a);
    }

    if (num > 1) {
        arr.push(a)
        arr.push(b)
    }
    
    for (let i = 2; i < num; i++){
       let next = a + b;
       arr.push(next);
       a = b;
       b = next;
    }

    return arr;
}

let num = parseInt(prompt("Enter a valid number to get it's fibonacci sequences 😎 : "));
console.log(fibs(num));
