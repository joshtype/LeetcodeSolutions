/*
    LEETCODE PROBLEM: twoSum I; Easy Difficulty; Javascript
    TIME COMPLEXITY : O(n^2); n = length of input arr iterated with a nested for-loop.
    SPACE COMPLEXITY: O(1); no additional data structures used.

    EXPLANATION:
        Iterate an input unsorted arr to find two indices that sum to 
        the input target value. No index can be used twice. One solution
        is guaranteed per testcase. Return the index locations as an arr.
    APPROACH:
        A nested for-loop that iterates the input arr with two pointers.
        Check the sum of each ith index with each jth index. Return the
        index locations as an arr when their sum equals the target.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumUnsorted = function(nums, target) {
    // start i at idx 0 & j at idx 1
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            // ensure that the idx is not used twice
            if(i !== j) {
                if(nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
    // not necessary but good practice to add
    return [];  // in case no solution exists
};

// testing
let array1 = [2,7,11,15]; let target1 = 9;
console.log(twoSumUnsorted(array1, target1));
    // expected output = [0, 1]

let array2 = [3, 2, 4]; let target2 = 6;
console.log(twoSumUnsorted(array2, target2));
    // expected output = [1, 2]

