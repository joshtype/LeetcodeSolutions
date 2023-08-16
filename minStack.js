/*
    LEETCODE PROBLEM: minStack; Medium Difficulty; Javascript
    TIME COMPLEXITY : O(1) constant time due to each method 
                      not needing to iterate through stack
    SPACE COMPLEXITY: O(n), where n = the length of the two
                      stack arrays
    
    EXPLANATION: 
        Stacks are contiguous arrays used to store values. However,
    they are treated differently than most arrs in that stacks are
    concieved as being built upward (from 0th index) and the data
    stored in the stack is accessed/modified per a principle known
    as LIFO: Last-In-First-Out. Like a stack of plastic cups, cups
    are removed (popped) from the top of the stack while new cups 
    are added (pushed) on top of the stack. It's not impossible to
    split the stack of cups and remove or add a cup at a different
    arbritary point but doing so increases overrall time complexity
    and is counter to the reasoning behind using stacks.

        Per LIFO, the last index in the stack arr is the only point
    at which data should be added, modified, updated, or removed. 
    This index is the most accessible point in the stack. It called
    the top (of the stack) or the back end (of the arr). The opposite 
    end of the stack is called the bottom (of the stack) or the front
    end (of the arr). It is the first or 0th index of the arr. Adhering
    to LIFO, it is the least accessible index in the stack.
*/

/**
 * Constructor method to initialize MinStack objects.
 */
var MinStack = function() {
    // init two arr fields for two stack and substack arrs
    // will be initialized as MinStack constructor called
    this.stack = new Array();  // main stack arr
    this.sub = new Array();    // min values arr
};

/**
 * Add a new value to the stack.
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // use this to access stacks initialized in constructor
    let stack = this.stack;
    let sub = this.sub;

    // push val to top of stack, per LIFO
    stack.push(val);

    // update minimum values in substack
    if(sub.length > 0) {
        // store lesser value, param or top of substack
        val = Math.min(val, sub[sub.length-1]);
        sub.push(val);  // push min to substack top
    } else {
        sub.push(val);  // if empty, val = default min
    }
};

/**
 * Remove value from top of stack.
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let stack = this.stack;
    let sub = this.sub;

    // 1st check if top of stack is current min
    if(stack[stack.length-1 === sub[sub.length-1]]) {
        // if so, update the substack
        sub.pop();  // per LIFO
    }
    
    // after checking, pop top of main stack
    stack.pop();  // per LIFO
};

/**
 * Get current value from top of stack.
 * @return {number}
 */
MinStack.prototype.top = function() {
    let stack = this.stack;
    return stack[stack.length-1];
    
};

/**
 * Get the minimum value from entire stack.
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let sub = this.sub;
    // top of substack holds current min value
    return sub[sub.length-1];
};

var test_1 = function() {
    let minstack = new MinStack();
    let test = [minstack.push(1), minstack.push(2), minstack.push(0),
                minstack.pop(), minstack.top(), minstack.getMin()];
    let res = [];
    for(t of test) {
        res.push(t);
    }
    console.log(res);
};

test_1();
// expected output = [ undef, undef, undef, undef, 2, 0 ]
