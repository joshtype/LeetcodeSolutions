/**
 * Recursively generate all well-formed combinations
 * of n pairs of parentheses.
 * Eg: n = 2 should return an arr of ["(())", "()()"].
 * @param  {number} n 
 * @return {string[]} 
 */
var genParen = function(n) {
    // base cases
    if(n === 0) {
        return [];
    } else if(n === 1) {
        return ["()"];
    } else if(n === 2) {
        return ["(())", "()()"];
    }

    let temp = new Array();  // stack to build a temp combination
    let res = new Array();   // return stack for completed combinations

    // define a function to recur adding left or right parens
    let addRecur = function(left, right) {
        // left < n to add a left paren, right < left to add a right
        // all combinations are found when left == n & left = right

        if(left === n === right) {
            // add combination to return stack
            res.push(''.join(temp));
            return;  // exit recursion
        }

        if(left < n) {
            temp.push("(");  // add a left paren
            addRecur(left+1, right);  // inc left & recur
            temp.pop();  // pop to prepare for next combo
        }
        if(right < left) {
            temp.push(")");
            addRecur(left, right+1);
            temp.pop();
        }
    }
    addRecur(0,0);  // begin recurring; pass in 0 for left & right
    return res;  // after recurring, return stack should have all valid combos
};

// testing
console.log(genParen(1));  // expected output = ["()"]
console.log(genParen(2));  // expected output = ["(())", "()()"]
console.log(genParen(3));  // expected output = ["((()))","(()())","(())()","()(())","()()()"]
