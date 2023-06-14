/**
 * Iterative Fibonacci function in JavaScript.
 * Formula: F(n) = F(n-1) + F(n-2) where n > 1.
 * F(0) = 0, F(1) = 1 (not technically valid inputs).
 */

// individual fibonacci number
function fibo(n) {
    if(n > 1) {
        return (n-1) + (n-2);
    } else {
        return n;
    }
}

// sequence of 15 fibonacci numbers from n using iteration
function iterFibo(n) {
    // array container for sequence of 10 nums
    var seq = [];
    // F(0) = 0, F(1) = 1
    if(n == 0) {
        seq[0] = 0;
        seq[1] = 1;
        // iteratively determine following 13 fibo nums
        for(i = 2; i < 15; i++) {
            seq[i] = (n-1) + (n-2);
            n++;
        }
    }
    // F(1) = 1
    if(n == 1) {
        seq[0] = 1;
        // iteratively determine following 14 fibo nums
        for(i = 1; i < 15; i++) {
            seq[i] = (n-1) + (n-2);
        }
     }
     // input > 1
     if(n > 1) {
        // iteratively determine all 15 fibo nums
        for(i = 0; i < 15; i++) {
            seq[i] = (n-1) + (n-2);
            n++;
        }
    }
     // display fibo nums
     for(i = 0; i < seq.length; i++) {
        console.log(seq[i]);
     }
}

console.log("Finding an individual Fibonacci number: " + fibo(151));
console.log("Finding sequence of 15 Fibonacci numbers iteratively: ");
iterFibo(12);