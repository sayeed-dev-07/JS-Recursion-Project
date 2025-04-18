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

let num = parseInt(prompt("Enter a valid number to get it's fibonacci sequences 😎 [simple code] : "));
console.log(fibs(num));


function fibsRec(num, arr = [0, 1]){
    if (num < 0 || !Number.isInteger(num)) {
        return 'Error ! enter a valid integer number 😑'
    }
    if (arr.length >= num) {
        return arr;
    }
    return fibsRec(num, [...arr , arr[arr.length - 2] + arr[arr.length - 1]])
}

// user input

let num2 = parseInt(prompt("Enter a valid number to get it's fibonacci sequences 😎 [recursive code] : "))

console.log(fibsRec(num2));


// example

/*
console.log(fibsRec(5));  //[ 0, 1, 1, 2, 3 ]
console.log(fibsRec(-1));  // Error ! enter a valid number 😑
console.log(fibsRec('hello')); // Error ! enter a valid number 😑
console.log(fibsRec(4.3)); // Error ! enter a valid number 😑

*/