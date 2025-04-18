
function nthFibonacci(n){

    // Base case: if n is 0 or 1, return n
    if (n <= 1) {
        return n;
    }
    
    // Recursive case: sum of the two preceding Fibonacci
    // numbers
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

let n = 5;
let result = nthFibonacci(n);
console.log(result);
