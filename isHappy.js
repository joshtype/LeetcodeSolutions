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

        I use Sets in my solution to store values of n, starting with the
        raw input value of n and then attempting to add each n after it is
        reassigned to the sum of its squared digits. For any non-negative,
        non-zero input n that can be reduced to 1, the sum will never be a
        duplicated value. For input that cannot reduce to 1, n will cycle
        between a set of values infinitely, as in the above example. This
        makes Sets the best tool to detect and exit an infinite loop. The
        attempt to add n to the Set can be used in a boolean conditional:
        if Set.has(n) returns true or false. If true, then n is repeating
        and is looping infinitely, and the loop can be broken. If false, 
        the loop can continue execution. Maps could also work to this end,
        but for the context of this problem, there is no relevant data to 
        pair with n.
*/

function squareSum(n) {
    // base case: n = happy
    if(n === 1) {
        return true;
    }

    // declare set to store unique n values
    const loopCheck = new Set();

    // check for inf loop
    while(!loopCheck.has(n)) {
        // if not present, add n to set
        loopCheck.add(n);  

        // get sum of squares of n
        let next = 0;  // store sum of squared digits
        while(n !== 0) {
            // get next digit
            const dgt = (n % 10);
            // square digit
            next += dgt * dgt;
            // remove digit
            n = Math.floor(n / 10);
            // reloop
        }
        n = next;  // next number for reloop
        
        // base case: n = happy
        if(n === 1) {
            return true;
        }
        /* if n !== 1, it reloops, adding n to set, until
           loop breaks when n is present in set or n = 1 */
    }
    // base case: n in set
    return false;
}

console.log(squareSum(19));  // true
console.log(squareSum(15));  // false