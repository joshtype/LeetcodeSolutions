/**
 * LEETCODE PROBLEM: containsDuplicate Javascript Solution
 * Returns true if any value in the input array is repeated, false if all values are unique.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // STEP 0: construct an empty set from the input array
    var mySet = new Set(nums);  // drops repeated values

    // STEP 1: compare set size vs array length & return result
    return mySet.size !== nums.length;  // size != len == true
};

    /**
     * Explanation:
     * Sets can only contain unique elements. By passing the input array through a 
     * set constructor, any repeated elements in the array are dropped and are not
     * to the set. Thus, the set's size and the array's length can only be equal if
     * each element in the array was added to the set. If they are not equal, then
     * one or more values in the array must have been a duplicate and not added to
     * the set, resulting in a larger array length compared to set size. 
     */

// STEP 2: define test parameters
let nums1 = [0, 1, 2, 3, 4, 5, 6];
let nums2 = [0, 0, 1, 1, 2, 2, 3];

// STEP 3: invoke function to test
console.log("Test 1: " + containsDuplicate(nums1));  // expect false for no repeated values in input array
console.log("Test 2: " + containsDuplicate(nums2));  // expect true for repeated values in input array