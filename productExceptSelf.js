/*  
    LEETCODE PROBLEM : productExceptSelf; Medium Difficulty; Javascript
    TIME COMPLEXITY  : O(n), where n increases with the size of the input arr.

    EXPLANATION:
        1) arr = 3 groups: arr[i], i < arr[i], i > arr[i]
        2) arr[i] reassigned to (i < arr[i] * i > arr[i])
        *) constraint: products will fit a 32-bit integer
        *) constraint: cannot use any division operations

    Eg) if input arr = [1, 2, 3, 4] then output = [(2*3*4), (1*3*4), (1*2*4), (1*2*3)] 
*/

/**
 * Changes each element in an input arr to the product of every other element.
 * @param  {number[]} nums
 * @return {number[]} arr resulting from applied operations
 */
var productExceptSelf = function(nums) {
    // STEP 0: declare an empty return arr & a variable to store index values
    let arr = [];
    let pre, aft;

    // STEP 1: iterate input arr to find vals before arr[i]
    pre = 1;
    for(let i = 0; i < nums.length; i++) {
        arr[i] = pre;
        pre *= nums[i];

        // LOOPS:
            // arr = [], nums = [1, 2, 3, 4]
                // i = 0: arr[0] = 1 ... pre = (1 * 1)
                // i = 1: arr[1] = 1 ... pre = (1 * 2)
                // i = 2: arr[2] = 2 ... pre = (2 * 3)
                // i = 3: arr[3] = 6 ... pre = (6 * 4)
            // arr now = [1, 1, 2, 6]
    }

    // STEP 2: re-iterate input arr to find vals after arr[i]
    aft = 1;
    for(let i = nums.length-1; i >= 0; i--) {
        arr[i] *= aft;
        aft *= nums[i];

        // LOOPS:
            // arr = [1, 1, 2, 6], nums = [1, 2, 3, 4]
                // i = 3: arr[3] = (6 * 1)  =  6 ... aft = (1 * 4)  = 12
                // i = 2: arr[2] = (2 * 4)  =  8 ... aft = (4 * 3)  = 12
                // i = 1: arr[1] = (1 * 12) = 12 ... aft = (12 * 2) = 24
                // i = 0: arr[0] = (1 * 24) = 24 ... aft = (24 * 1) = 24
            // arr now = [24, 12, 8, 6]
    }

    // STEP 3: return resulting arr
    return arr;
};

// STEP 4: test solution
let testArr1 = [1, 2, 3, 4];  // expected output = [24, 12, 8, 6]
console.log("TEST 1: input = " + testArr1 + ", output = " + productExceptSelf(testArr1));

let testArr2 = [4, 3, 2, 1];  // expected output = [6, 8, 12, 24]
console.log("TEST 2: input = " + testArr2 + ", output = " + productExceptSelf(testArr2));

let testArr3 = [-2,1,0,-3,1];  // expected output = [0, 0, 6, 0, 0]
console.log("TEST 3: input = " + testArr3 + ", output = " + productExceptSelf(testArr3));

