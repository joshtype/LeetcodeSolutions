/*
    LEETCODE PROBLEM : isHappy; Easy Difficulty; Javascript
    TIME COMPLEXITY  : O(n), n = number of loops required.
    EXPLANATION:
        1) if n > 1, n = sum of digits squared
        2) loop until n = 1 or n != 1 & loop = inf
        2) loop breaks at n = 1: return true
        4) loop = inf & n != 1: return false
    EXAMPLE:
        1) input int = 12 = (1^2 + 2^2) = 5
        2) n = (5^2) = 25 = (2^2 + 5^2) = 29
        3) after a few loops, n = 25 again,
        4) the loop is infinite, return false
    NOTE:
        This problem is about detecting and preventing infinite loops,
        known as the Halting Problem. Modern programming is as yet not
        able to detect if a loop will continue infinitely either before 
        or during execution. The current method consists of observing 
        that an output has nnot been returned within a reasonable time.
        There are methods of indirect detection, though applicability 
        varies with context of the application or given data.

        The solution below implements Sets to store values of n, from the
        raw input value of n to each n value after its value is set equal
        to the sum of its digits squared. For all non-negative & non-zero 
        input values of n that will eventually reduce to 1, the sum of the
        digits squared will never be duplicated. For all such n that aren't
        able reduce to 1, n will be duplicated eventually as the loop runs
        infinitely.
        
        Checking if Set.has(n) can be used as a boolean conditional, such
        as: if Set.has(n) = true, continue; if false, then exit loop. This
        prevents loops that could execute infinitely from doing so. A Map 
        would also do this, but since no relevent data exists that should
        logically be paired with n, Sets remain the best choice.
*/

/**
 * Evaluate n using a loop that resets n = sum of 
 * its digits squared. If the loop ends & n = 1, n
 * is happy. If the loop never ends, ie is infinite,
 * then it is unable to set n = 1 & n is not happy.
 * 
 * @param  {number} n non-negative, non-zero integer
 * @return {boolean}  true if n = happy, else false
 */
const squareSum = function(n) {
    // 0: check base case n = 1
    if(n === 1) {
        return true;
    }
    // 1: if n != 1, declare empty Set to store values of n
    const loopCheck = new Set();

    // 2: check if the current value of n is in the Set
    while(!loopCheck.has(n)) {
        // if n is not present, add n to the set
        loopCheck.add(n);  

        // 3: calculate the sum of n's digits squared
        let sum = 0;  // resets ea loop, increments sum

        while(n !== 0) {
            const dgt = (n % 10);    // get next digit of n
            sum += dgt * dgt;        // square digit, increment sum
            n = Math.floor(n / 10);  // move to next digit if present
            // reloops if 2+ digits remaining, loop breaks if n = single digit
        }
        n = sum;  // set n = to sum of its digits squared
        
        // 4: recheck base case n = 1
        if(n === 1) {
            return true;
        }
        // If n !== 1, a reloop is triggered & checks the set to see if n was previously added.
        // If n isn't in set, its added, sum resets to 0 & the inner loop executes until n = 0.
        // If n is present in set, the loop is cycing infinitely, and n will never reduce to 1.
    }
    // 2: base case n != 1 & loop = infinite
    return false;
};

// 5: testing
console.log("TEST 1: n is happy = " + squareSum(19));  // expected output = true
console.log("TEST 2: n is happy = " + squareSum(15));  // expected output = false