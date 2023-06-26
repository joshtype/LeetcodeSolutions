/*
LEETCODE PROBLEM : validParentheses (impl. as lifeBrackets); easy difficulty; Javascript
TIME COMPLEXITY  : O(n), increasing with size n of the input string.
SPACE COMPLEXITY : O(n/2).

EXPLANATION:
    This problem is a demonstration of 'Stack' data structures. Stacks use 
    the 'Last in, First out' (or 'LIFO') principle of data access. This can be
    compared to a stack of boxes. The box on top of the stack would be the last
    box stacked, the most accessible, and the first one removed from the stack.

EXAMPLE: 
    If input = {([])}, output = true. If input = }{][(), output = false.

NOTE ON DATA STRUCTURES:
    There are no physical stacks (or heaps or maps or trees, etc)  
    The stack (and all data structures) refer to the conceptualization of how the
    data is stored, accessed, and manipulated, as well as the relationship between
    referenced data.
*/

// BEGIN CODE:
/**
 * Iterate input string, determine if it starts with opening brackets and if each
 * opening bracket has a matching closing bracket, return true if so, false if not.
 * @param {string} s
 * @return {boolean}
 */

const lifoBrackets = function(s) {
    // STEP 0: check if input is null, has len >= 2
    if((!s) || (s.length < 2)) {
        return false;
    }
    // STEP 1: declare empty stack (after len check to save memory if len < 2)
    var stack = [];

    // STEP 2: iterate over the input string, checking each char
    for(let char of s) {
        // if char = open bracket
        if(char === "(" || char === "{" || char === "[") {
            // push char to the stack
            stack.push(char);
        // if char != opener or all openers have been stacked
        } else {
            // check if stack is empty, if not then all openers were added
            if(!stack.length) {
                // if empty, input did not begin with openers
                return false;
            }

            // STEP 3: if current char != opener, pop the opener last added to stack (LIFO)
            let lastIn = stack.pop();  // store last-in char to compare with next char

            // FLOW: pop last stacked char, check below, pop next cbar, check below, etc... until no chars are left to eval.
            // If the opener that is being popped (stored as lastIn) matches the closer being evaluated, the loop restarts
            // and pops the next char. If all brackets match up in this way, the stack will become empty. 

            // STEP 4: compare last-in char vs the current non-opening bracket
            if(char === ")" && lastIn !== "(") {
                // if the last-in (now first-out) isn't the same kind of bracket
                return false;
            }
            if(char === "]" && lastIn !== "[") {
                return false;
            }
            if(char === "}" && lastIn !== "{") {
                return false;
            }
        } 
    }
    // STEP 5: return true if stack empty, false if it's not empty
    return !stack.length;

    // After for-loop, returns true if stack is empty, meaning that all chars were popped from stack.
    // All chars will be popped if, after adding every opener at the beginning of the input string,
    // the next char evaluated is a closer and it matches the opener that was last added to stack.
};

// STEP 6: define test parameters
var s1 = "{}";
var s2 = "({[()]})";
var s3 = "([}]";
var s4 = "(closing bracket";

// STEP 7: invoke function to test, save and display results
var test1 = lifoBrackets(s1);  
var test2 = lifoBrackets(s2);  
var test3 = lifoBrackets(s3);  
var test4 = lifoBrackets(s4);

console.log("TEST 1 = " + test1);  // expected output = true
console.log("TEST 2 = " + test2);  // expected output = true
console.log("TEST 3 = " + test3);  // expected output = false
console.log("TEST 4 = " + test4);  // expected output = false

// END CODE