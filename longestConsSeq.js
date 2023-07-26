/*
    LEETCODE PROBLEM: longestConsecutiveSequence; Medium Difficulty; Javascript
    TIME COMPLEXITY : O(n): n = size of the set that must be iterated with n loops.
    SPACE COMPLEXITY: O(n): n = size of the set containing each unique value from input array.

    EXPLANATION: 
        In O(n) time complexity, determine the longest consecutive sequence of integers
        appearing in an unsorted input array.
    
    APPROACH:
        Sorting the input array first would result in time complexity of O(n log n). To 
        meet the constraint of O(n) runtime, it is necessary to implement a hash set or
        hash map. Because data can not be stored usefully as key:value pairs, a hash set
        is the best data structure to use.
        
    STEPS:
        1) check the length of the input array, return 0 if arr len < 1
        2) if input arr len > 0, init a set of ea unique value in input arr
        3) declare a field for storing sequence len, initialized at 0
        4) iterate the set using a for-loop, evaluating each n of the set
        5) for each n, check if n-1 exists in set; if not n = start of sequence
        6) for each n that doesn't have n-1, initialize a counter set to 0
        7) while values exist that follow n by steps of 1, increment counter
        8) reassign result to the current counter if its greater
        9) after n loops, return the resulting sequence len
*/


/**
 * Iterates an unsorted input array to return
 * the length of the longest sequence of 
 * consecutive integers.
 * @param  {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    // check if input arr too small
    if(nums.length < 1) {
        return 0;
    }

    // if not, init set and field for storing seq len
    const values = new Set(nums);
    var resK = 0;  

    // iterate set
    for(let n of values) {
        if(!values.has(n - 1)) {  // n = seq start
            let tempK = 0;  // counter
            while(values.has(n + tempK)) {
                tempK++;  // increment counter
            }
            // reassign len to greater value: temp or result
            resK = Math.max(tempK, resK);
        } 
    }
    return resK;
};

// testing
let arr1 = [100,4,200,1,3,2];
let arr2 = [0,3,7,2,5,8,4,6,0,1];
let arr3 = [];
console.log("TEST 1: " + longestConsecutive(arr1));  // expected output = 4
console.log("TEST 2: " + longestConsecutive(arr2));  // expected output = 9
console.log("TEST 3: " + longestConsecutive(arr3));  // expected output = 0