/**-------------------------------------------------------------------------------------+
 * LEETCODE PROBLEM: containsDuplicate Two Solutions in Javascript:
 * TIME COMPLEXITY: O(n), increasing with size of input array.
 * VERSION 1
 *--------------------------------------------------------------------------------------*/

/**
 * FIRST SOLUTION USING SET CONSTRUCTION.
 * TIME & SPACE COMPLEXITY = O(n).
 * @param  {number[]} nums
 * @return {boolean}  true if duplicate found, else false
 */
const setSolve = function(nums) {
    // construct an empty set from the input array, will not add any duplicate values
    var mySet = new Set(nums);
    // compare set size vs array length & return true if arr len != set size, else false
    return mySet.size !== nums.length;
};

/**
 * SECOND SOLUTION USING A SET OBJECT AS A HASHTABLE.
 * TIME & SPACE COMPLEXITY = O(n).
 * @param  {number[]} nums
 * @return {boolean}  true if duplicate found, else false
 */
const hashSolve = function(nums) {
    // declare set obj for hashtabling
    let setObj = {};
    // begin iterating input arr
    for(let i = 0; i < nums.length; i++) {
        // store each index as a variable
        let arrVal = nums[i];
        // hastable set and arr
        if(setObj[arrVal]) {
            // if the value is already present, exit iteration
            return true;
        } else {
            // value not present, set to true that the ith idx is the same for each
            setObj[arrVal] = true;
        }
    }
    // if the entire input arr is iterated without finding duplicates
    return false;
};

// runtime testing library
const { performance } = require("perf_hooks");
/**
 * Performance testing using perf_hooks library.
 * @param  {function} testFn
 * @param  {integer[]} testArr
 */
const testRun = function(testFn, testArr) {
    // define testing range
    let start = performance.now();
    let stop = performance.now();
    // display results
    console.log("   < " + testFn.name + " Runtime: " + (stop - start) + " ms >")
};

/**
 * Returns an array of integers within interval (0, n]. Contains a randomly chosen duplicated value inserted at same val idx.
 * @param  {integer} n
 * @return {integer[]} arr
 */
const arrDuplicateVal = function(n) {
    let arr = [];
    for(let i = 0; i < n; i++) { arr.push(i); }
    // random number (0, n]
    var num = Math.floor(Math.random() * n);
    // ensure random num is within bounds 
    if(num === n) { n -= 1; }
    // insert random num
    arr[num] = num;
    // return arr with duplicate value
    return arr;
};
/** Returns an array of integers within interval (0, n] with no duplicated values.
 * @param  {integer} n
 * @return {integer[]} arr
 */
const arrNoDuplicate = function(n) {
    let arr = [];
    for(let i = 0; i < n; i++) { arr.push[i]; }
    return arr;
};

// generate arrays with a duplicated value
arrT10 = arrDuplicateVal(10);
arrT100 = arrDuplicateVal(100);
arrT1k  = arrDuplicateVal(1000);
arrT10k = arrDuplicateVal(10000);
arrT100k = arrDuplicateVal(100000);
arrT1m   = arrDuplicateVal(1000000);
// generate arrays with no duplicate value
arrF10 = arrNoDuplicate(10);
arrF100 = arrNoDuplicate(100);
arrF1k  = arrNoDuplicate(1000);
arrF10k = arrNoDuplicate(10000);
arrF100k = arrNoDuplicate(100000);
arrF1m   = arrNoDuplicate(1000000);

// explain tests
console.log("Same array is used for both solutions in each test. Duplicates are same randomly chosen value at same index.");

// invoke test functions for duplicate = true arrays
console.log("n = 10 and duplicate(s) = true:");
testRun(setSolve, arrT10);
testRun(hashSolve, arrT10);
console.log("n = 100 and duplicate(s) = true:");
testRun(setSolve, arrT100);
testRun(hashSolve, arrT100);
console.log("n = 1k and duplicate(s) = true:");
testRun(setSolve, arrT1k);
testRun(hashSolve, arrT1k);
console.log("n = 10k and duplicate(s) = true:");
testRun(setSolve, arrT10k);
testRun(hashSolve, arrT10k);
console.log("n = 100 and duplicate(s) = true:");
testRun(setSolve, arrT100k);
testRun(hashSolve, arrT100k);
console.log("n = 1m and duplicate(s) = true:");
testRun(setSolve, arrT1m);
testRun(hashSolve, arrT1m);
// invoke test function for duplicate = false arrays
console.log("n = 10 and duplicate(s) = false:");
testRun(setSolve, arrF10);
testRun(hashSolve, arrF10);
console.log("n = 100 and duplicate(s) = false:");
testRun(setSolve, arrF100);
testRun(hashSolve, arrF100);
console.log("n = 1k and duplicate(s) = false:");
testRun(setSolve, arrF1k);
testRun(hashSolve, arrF1k);
console.log("n = 10k and duplicate(s) = false:");
testRun(setSolve, arrF10k);
testRun(hashSolve, arrF10k);
console.log("n = 100 and duplicate(s) = false:");
testRun(setSolve, arrF100k);
testRun(hashSolve, arrF100k);
console.log("n = 1m and duplicate(s) = false:");
testRun(setSolve, arrF1m);
testRun(hashSolve, arrF1m);
// END OF FILE