/*
LEETCODE PROBLEM: maxProfit (impl. as maxDiff); easy difficulty; Javascript
TIME COMPLEXITY: O(n), increasing with size n input array. 
 
EXPLANATION:
    Searches an input array (left -> right) for the min value and the max value that
    appears right of min. Return the max difference between the two values. Return 0 if
    determining the max difference isn't possible (e.g. if min is in array's last index).

NOTE: 
    This is a simplified implementation of the sliding window algorithm in which the
    input arr = size n; subArrays = size k; and the number of subArrays = (n / k). In
    this problem, k = 1, or each element is a subArray (ie the arr is its own subArray,
    as in set theory where sets are subsets to themselves). This situation calls for the
    largest difference between any two subArrays, commonly used for Sliding Window demos, 
    with the added constraint that the max value must appear to the right of the min value
    so it may not be the actual max value of the entire arr. Since k = 1 for each subArr, 
    the resulting operation is simply subtracting Math.min() from the Math.max() to the 
    right of Math.min().
*/

// BEGIN CODE:
/**
 * Iterates input arr of numbers to determine the maximum difference between the least 
 * value and the greatest value that appears to the right of the least. Returns the
 * max difference or 0 if it's not possible to determine the max difference.
 * @param  {number[]} arr
 * @return {number} maximum possible difference (or 0)
 */
var maxDiff = function(arr) {
    // STEP 0: declare pointers 
    var minLeft = 0;   // will store min value, must appear left of maxRight
    var maxRight = 1;  // will store max value, must appear right of minLeft
    var maxDiff = 0;   // will store max possible difference to return
    var tempVal = 0;   // will store differences between 

    // STEP 1: ensure array len vs subArray len (size k = 1)
    if(arr.length < 1) {
        return 0;
    }
    // STEP 2: while there are indices to search right of buyLow
    while(maxRight < arr.length) {
        if(arr[minLeft] < arr[maxRight]) {
            // store current difference of subArrays in a temp variable
            let tempDiff = arr[maxRight] - arr[minLeft];
            // assign temp profit to max profit
            maxDiff = Math.max(maxDiff, tempDiff);
        } else {
            // replace min value
            minLeft = maxRight;
        }
        // STEP 3: increment sellHigh, re-execute loop logic to continue searching
        maxRight++;
    }
    // STEP 4: after loop breaks, maxProfit is found, or 0 if not possible
    return maxDiff;
};

// STEP 5: define test parameters
var nums1 = [2, 1, 3, 4, 7, 9, 7, 8, 5];  // unsorted
var nums2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];  // reverse sorted


// STEP 6: invoke function to test
var max1 = maxDiff(nums1);  // expected output: 8 (max = 9, min = 1, maxProfit = max -  min)
var max2 = maxDiff(nums2);  // expected output: 0 (no profit possible as min appears in last index)
if(max1 > 0) {
    console.log("Test 1: Maximum profit possible = " + max1 + ".");  
} else {
    console.log("Test 1: Warning! Profit is not possible!");  
}
if(max2 > 0) {
    console.log("Test 2: Maximum profit possible = " + max2 + ".");  
} else {
    console.log("Test 2: Warning! Profit is not possible!");  
}

// END CODE