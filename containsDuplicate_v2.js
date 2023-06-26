/*
VERSION 2 WITH NOTES; UPDATED CODE; IMPROVED RUNTIME + READABILITY + ABSTRACTION; IMPROVED TESTING.

LEETCODE PROBLEM : containsDuplicate; easy difficulty; Javascript
TIME COMPLEXITY  : O(n), n = size of input array.
 
FIRST SOLUTION EXPLANATION:
    Simplest solution to code & understand converts the input arr to a set then 
    compares arr len vs set size. By passing the input arr as an argument to a set
    constructor, it exploits the unique-values-only property of sets. The input arr
    is iterated completely by the constructor, adding all unique values to the set.
    Afterwards, if the input arr len != set size, there must have been a repeated
    value not added to the set. If len = size, it follows that every element in the
    input arr was unique.
 
SECOND SOLUTION EXPLANATION:
    The second solution is not quite as intuitive. The approach here uses a set
    as a hashtable object. The main difference between this and the first solution is
    that the first requires the entire arr to be iterated while hashtabling the
    conversion allows the function to return true as soon as a duplicated value is
    found in the input arr. This makes this approach exponentially faster for larger
    arr lens, around n >= 10k. However, if there are no duplicates found.
*/

// BEGIN CODE:
/** 
 * FIRST SOLUTION USING SET CONSTRUCTION.
 * @param {number[]} nums
 * @return {boolean} true if any element in input arr is duplicated, else false
 */
const setSolve = function(nums) {
    // construct an empty set from the input array, will not add any duplicate values
    var mySet = new Set(nums);
    // compare set size vs array length & return true if arr len != set size, else false
    return mySet.size !== nums.length;
};

/**
 * SECOND SOLUTION USING A HASTABLE OBJECT.
 * @param  {number[]} nums 
 * @return {boolean} true if any element in input array is duplicated, else fale
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


/*
TESTING:
    With testing, the first apprach (set constructions) is much faster if input arr 
    is small to average size n. However, it becomes much more inefficient for large n, 
    around n >= 10k. The benefit of returning early upon finding a duplicate rather
    makes the second approach exponentially faster for n >= 10k. If it is not possible 
    to guage input arr len or possibility of duplicates, the best approach would be the 
    second.
 
REASONING:
    1) Assuming the input arr holds only integers, it is (infinity - 10k) times more
        probable for (n > 10k).
    2) If the input arr holds any numerical value, ints/floats/doubles, it becomes
        (infinity^2 - 10k) more probable for (n > 10k).
    3) If the input arr contains random values from the entire range of ints,
        (-inf, +inf), it is again (inf - 10k) times less likely that a value will be 
        duplicated. This grows if other number sets are included. However, this would 
        represent a rare situation, a true edge case. Thus, the stated benefits of the
        second approach stand.
*/

// import runtime testing library
const { performance } = require("perf_hooks");
/**
 * Performance testing using perf_hooks library.
 * @param {function} testFn 
 */
const testRun = function(testFn) {
    // define test parameters
    let start = performance.now();
    let stop = performance.now();
    // round after 5 decimals for readability & display results
    let time = (stop - start).toFixed(5);
    console.log("   < " + testFn.name + "() runtime = " + time + " >");
    // return time for conditional comparisons
    return time;
};

/**
 * Returns an array of integers within interval (0, n]. Contains duplicated element if 'duplicate' = true.
 * @param  {integer} n         length of input array
 * @param  {boolean} duplicate true if array should have a random duplicate value (0, n]
 * @return {integer[]}         array of ints in range (0, n]
 */
const makeArray = function(n, duplicate) {
    let arr = [];
    for(let i = 0; i < n; i++) { arr.push(i); }
    if(duplicate === true) {
        // random number (0, n]
        var num = Math.floor(Math.random() * n);
        if(num === n) { n -= 1; }
        arr[num] = num;
        return arr;
    } else { return arr; }
};

// Generates arrays, with and without randomnly chosen duplicated/inserted value, n = power of 10 from 10 to 10 million.
// Passes each array and both solutions through the perf_hooks testing function to test & compare solutions.
const solutionTEST = function() {
    
    // explain tests
    console.log("\nPurpose of test is to determine which solution is faster at searching an array for duplicate values.");
    console.log("Solution #1 uses a set constructor then compares set size vs arr len. Solution #2 uses a set as a hashtable.")
    console.log("Same array is used for both solutions in each test. Duplicates are same randomly chosen value at same index.");
    
    // testing both solutions with arrays with duplicate values
    console.log("\nTESTS -> ARRAYS WITH RANDOM DUPLICATED VALUES:\n")
    let t = 10;
    // automate array generation and testing (i < 8 to test all 7 array sizes)
    for(let i = 0; i < 8; i++) {
        // generate arrays with duplicate values
        arrT = makeArray(t, true); 
        console.log("(n = " + t + "):")
        // invoke tests, display raw results, store for comparison
        let sol1T = testRun(setSolve, arrT);
        let sol2T = testRun(hashSolve, arrT);
        // compare tests for more concise results display
        if(sol1T < sol2T) {
            console.log("RESULTS: using a set constructor faster by " + (sol2T-sol1T).toFixed(5) + " ms.\n");
        } else if(sol1T > sol2T) {
            console.log("RESULTS: using a set as a hashtable object faster by " + (sol1T-sol2T).toFixed(5) + " ms.\n");
        } else if(sol1T === sol2T) {
            console.log("RESULTS: using a set constructor and using a set as a hashtable object performed equally.\n");
        }
        t *= 10;  // increment t to next power of 10
    }
    // testing both solutions with arrays without duplicate values
    console.log("\nTESTS -> ARRAYS WITHOUT DUPLICATED VALUES:\n");
    let f = 10;
    for(let i = 0; i < 8; i++) {
        arrF = makeArray(f, false);
        console.log("(n = " + f + "):");
        let sol1F = testRun(setSolve, arrF);
        let sol2F = testRun(hashSolve, arrF);
        if(sol1F < sol2F) {
            console.log("RESULTS: using a set constructor faster by " + (sol2F-sol1F).toFixed(5) + " ms.\n");
        } else if(sol1F > sol2F) {
            console.log("RESULTS: using a set as a hashtable object faster by " + (sol1F-sol2F).toFixed(5) + " ms.\n");
        } else if(sol1F === sol2F) {
            console.log("RESULTS: using a set constructor and using a set as a hashtable object performed equally.\n");
        }
        f *= 10;
    }
};

// invoke testing within function to abstract data
solutionTEST();

// END CODE