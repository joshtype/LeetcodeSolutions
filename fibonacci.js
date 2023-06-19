/**
 * Iterative Fibonacci functions
 * Formula: F(n) = F(n-1) + F(n-2) where n > 1.
 * F(0) = 0, F(1) = 1 (not technically valid inputs).
 */

/**
 * Determines the Fibonacci number from n.
 * @param  {number} n
 * @return {number} Fibonacci number of n
 */
const nextFibo = function(n) {
    if(n > 1) {
        return (n-1) + (n-2);
    } else if(n === 0 || n === 1) {
        return n;
    } else {
        return "Invalid input."
    }
};

/**
 * Function iteratively sequences 15
 * Fibonacci numbers starting from n.
 * @param  {number} n
 * @return {numbers[]} array of Fibonacci numbers
 */
const arrFibo = function(n) {
    // declare arr to store fibo nums
    var seq = [];

    // set idx 0 to 0 & idx 1 to 1 if n = 0
    if(n == 0) {
        // F(0) = 0
        seq[0] = 0;
        // F(1) = 1
        seq[1] = 1;
        // fill arr with following 13 fibo nums
        for(i = 2; i < 15; i++) {
            seq[i] = (n-1) + (n-2);
            n++;
        }
    // set idx 0 to 1 if n = 1
    } else if(n == 1) {
        // F(1) = 1
        seq[0] = 1;
        // fill arr with following 14 fibo nums
        for(i = 1; i < 15; i++) {
            seq[i] = (n-1) + (n-2);
        }
     // true fibo sequence
     } else if(n > 1) {
        // fill arr with all 15 fibo nums
        for(i = 0; i < 15; i++) {
            seq[i] = (n-1) + (n-2);
            n++;
        }
    } else {
        return "Invalid input."
    }
    // return arr of 15 fibo nums
    return seq;
};

// define test parameters
let n1 = 151;
let n2 = 12;

// invoke functions to test
console.log("The Fibonacci number of " + n1 + " = " + nextFibo(n1));
console.log("Sequence of 15 Fibonacci numbers from " + n2 + " = " + arrFibo(n2));