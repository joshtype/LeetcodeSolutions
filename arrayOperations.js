/*
LEETCODE PROBLEM : applyOperations; easy difficulty; Javascript
TIME COMPLEXITY  : O(n) for both solutions, increasing with size n of input arr.
SPACE COMPLEXITY : O(n^2) for first solution, O(n) for second solution.

EXPLANATION:
    Apply the following operations to the input array:
    1) if nums[i] == nums[i + 1] then multiply nums[i] * 2 and set nums[i + 1] to 0,
    2) after all operations are applied, shift every 0 to the end of the array,
    3) return the resulting array.
*/

/** 
 * SOLUTION 1: USING TWO ARRAYS & THREE FOR-LOOPS
 * TIME COMPLEXITY:  0(n) increasing with size n of input array.
 * SPACE COMPLEXITY: 0(n^2) with two arrays requiring n*n space.
 * @param  {number[]} nums
 * @return {number[]}
*/
const applyOperations = function(nums) {
    // STEP 0: declare empty array to return 
    arr = [];
    // STEP 1: iterate argument nums[]
    for(let i = 0; i < nums.length; i++) {
        // if nums[i] == nums[i + 1]
        if(nums[i] === nums[i + 1]) {
            // multipy the value of nums[i] by 2,
            nums[i] *= 2;
            // and change value of nums[i + 1] to 0
            nums[i + 1] = 0;
        }
    }
    // STEP 2: reiterate nums[] to add non-zero values to return arr
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] != 0) {
            arr[i] = nums[j];
            i++;
        }
    }
    // STEP 3: reiterate nums[] to shift 0s
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            // add a 0 to end of arr
            arr.push(0);
        }
    }
    // STEP 4: return finsihed array
    return arr;
};

/**
 * SOLUTION 2: USING ONLY THE INPUT ARRAY AND TWO FOR-LOOPS
 * TIME COMPLEXITY:  0(n) increasing with size n of input array.
 * SPACE COMPLEXITY: 0(n) with one array requiring n space.
 * @param  {number[]} nums
 * @return {number[]}
*/
const applyOperations2 = function(nums) {
    // STEP 1: iterate thru nums
    for(let i = 0; i < nums.length; i++) {
        // step 1a: locate matching adjacencies
        if(nums[i] === nums[i + 1]) {
            // step 1b: apply operations
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    // STEP 2: reiterate nums with reverse for-loop
    for(let i = nums.length - 1; i >= 0; i--) {
        // step 2a: if value is a 0 = true, splice the value and add a 0 to the end
        nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
    }
    // STEP 3: return array
    return nums;
};

// step 4: define parameters for testing
nums1 = [1, 2, 2];
nums2 = [2, 2, 4, 4, 0, 5, 6];
// step 5: invoke functions to test
console.log("Test 1 (two arrays) = " + applyOperations(nums1));  
console.log("Test 1 (one array)  = " + applyOperations2(nums1));  
// expected output: [1, 4, 0]
console.log("Test 2 (two arrays) = " + applyOperations(nums2));   
console.log("Test 2 (one array)  = " + applyOperations2(nums2));
// expected output: [4, 8, 5, 6, 0, 0, 0]
