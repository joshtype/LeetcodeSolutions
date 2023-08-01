/*
    LEETCODE PROBLEM: twoSum II; Medium Difficulty; Javascript
    TIME COMPLEXITY : O(n); n = length of input arr iterated at most n times. 
    SPACE COMPLEXITY: O(1); no additional data structures used.

    EXPLANATION:
        Iterates an input sorted arr, searching for two indices whose values add up to the
        input target. Returns the index locations in an arr using a 1-indexed return arr.
    CONSTRAINTS:
        Exactly one solution is guaranteed per testcase. No index can be used twice.
        Space complexity of O(1) is required, meaning no additional data structures.
    APPROACH:
        Use two pointers (left & right) to iterate through the input arr within a while loop.
        Since no index can be used twice, the loop must exit if the left & right pointer equal
        the same value. If the sum of the leftmost and rightmost indices are greater than the 
        target, move the right pointer leftwards by 1 index. If the sum is less than the target,
        move the left pointer rightwards by 1 index. When the sum is equal to the target, return 
        the index locations as an arr, but add 1 to conform to the 1-indexed arr constraint.
*/

/**
 * @param  {number[]} numbers
 * @param  {number}   target
 * @return {number[]}
 */
var twoSumSorted = function(numbers, target) {
    // iterate arr starting at 0th and 1st idxs
    // bc IDEs will read input arr as 0-indexed
    let left = 0;
    let right = numbers.length-1;
    // iterate input arr from front and back
    while(left < right) {
        let sum = numbers[left] + numbers[right];
        // base case 1
        if(sum < target) {
            left += 1;
        }
        // base case 2
        if(sum > target) {
            right -= 1;
        }
        // base case 3
        if(sum === target) {
            // add 1 to conform to 1-indexed arr
            return [left+1, right+1];
        }
    }
};
// testing
let arr1 = [2,7,11,15]; let tar1 = 9;
let arr2 = [2,3,4]; let tar2 = 6;
console.log(twoSum(arr1, tar1));
console.log(twoSum(arr2, tar2));