/*
    LEETCODE PROBLEM: Evaluate RPN; Medium Difficulty; Javascript
    TIME COMPLEXITY : O(n), where n is reduced from the length of 
                      the input arr * the length of the stack, ea
                      of which must be iterated once.
    SPACE COMPLEXITY: O(n), where n = the length of the stack.

    EXPLANATION:
        Stacks are contiguous arrays of values. They are treated 
        differently than non-stack arrays in that the data stored
        are accessed via principle of LIFO (last in first out).
        The last index of a stack array is called the top of the
        stack. It is the point at which data is added (pushed),
        retrieved, modified, or removed (popped). Operations that
        adhere to LIFO stacks require only O(1) constant time. 
        Though data in other locations can be accessed, doing so 
        is counter to the purpose of a stack as such operations
        require O(n) time, the same as iterating any normal array.

        In this problem, an input arr contains an expression written
        in Reverse Polish Notation (RPN). RPN lists operands first
        then operators. Eg:
            rpn1 = [2, 1, +, 3, *]
            rpn2 = [2, 1, 3, +, *]
        To evaluate this, we apply the operators to the two preceding 
        operands. 
            rpn1 = [(2+1) * 3]
            rpn2 = [(3+1) * 2]
        As operations are carried out, the operands are popped from 
        the top of stack and the result is pushed on top.
            rpn1 = [2, 1, +, 3, *] -> [3, 3, *] -> [9]
            rpn2 = [2, 1, 3, +, *] -> [4, 2, *] -> [8]
        Since the right number of operands and operators is guaranteed,
        the stack should contain only one int after evaluation is done.

    CONSTRAINTS:
        1. Guaranteed that there will be no edge test-cases, that
           a result is always possible and the result will always
           fit a 32-bit integer allocation.
        2. Guaranteed that all input arrays will contain only a 
           correct number, value, type of operands or operators.
        3. Data in the input array are stored as String types so
           operands must be converted to ints for evaluation.
        4. Valid operators include +, -, *, / and test-cases will
           only use these.
*/
/**
 * Evaluate an RPN input arr and
 * return the resulting value.
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // base case: input arr too small
    if(tokens.length < 3) {
        return 0;
    }

    // initialize a stack arr
    let ops = new Array();    
    
    for(let i = 0; i < tokens.length; i++) {
        let char = tokens[i];

        if(char === "+") {
            // convert char to int & pop operand
            ops.push(ops.pop() + ops.pop());
        }
        else if(char === "-") {
            let n1 = parseInt(ops.pop());
            let n2 = parseInt(ops.pop());
            ops.push(n2 - n1);
        }
        else if(char === "*") {
            ops.push(ops.pop() * ops.pop());
        }
        else if(char === "/") {
            let n1 = ops.pop();
            let n2 = ops.pop();
            ops.push(n2 / n1);
        } else {
            // char is an operand 
            ops.push(parseInt(char));
        }
    }
    return ops[0];
};

// testing
let arr1 = ["2", "1", "+", "3", "*"];
console.log(evalRPN(arr1));  // expected output = 9