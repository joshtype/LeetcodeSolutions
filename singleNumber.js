/*
    LEETCODE PROBLEM: singleNumber; Easy Difficulty; Javascript.
    TIME COMPLEXITY : O(n), where n = the size of the input arr 
                      and the map size.
    EXPLANATION: 
        1) Iterate a non-empty input array of integers. 
        2) Each element in the arr is duplicated except one.
        3) Find & return the single non-duplicated in the arr.
    NOTE:
        Incrementable counters are useful for problems like this.
        It's not necessary here bc ints in the arr appear at most 
        twice (and only once for one). But using counters is best
        practice because they protect against edge cases.
    EXAMPLE:
        1) For input arr = [1, 3, 5, 7, 5, 3, 1], output = 7.
*/

/**
 * Iterates input arr to find & return
 * a single unrepeated int in the arr.
 * @param  {number[]} nums a non-empty arr of ints
 * @return {number}   the single unrepeated in arr
 */
const singleNumber = function(nums) {
    // 0: declare empty hashmap
    const hmap = new Map();  // key = arr int; val = occur rate
    

    // 1: iterate nums to count occurrences of ea int
    for(let i = 0; i < nums.length; i++) {
        var freq = 1;
        // if the int has not been mapped yet
        if(!hmap.has(nums[i])) {
            hmap.set(nums[i], freq);  // set int as key to a val of 1
        } else {
            // if the int has been mapped previously
            hmap.set(nums[i], freq+1);  // add one to count 
        }

    }
};