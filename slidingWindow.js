/** 
 * SLIDING WINDOW ALGORITH DESCRIPTION & IMPLEMENTATION
 * Instead of iterating an array k times to divide elements into k subArrays
 * yielding O(n*k), only a single loop is needed, yielding O(n).
 *
 * sampleArr = [3, 7, 2 , 1, 9, 6 , 0, 4, 5] find largest size-3 subArray;
 * subArrays = [3, 7, 2] [1, 9, 6] [0, 4, 5].
 *
 * Instead of 3 separate for-loops algo uses one loop to find the sum of first k
 * elements, slides over to add the next element and subtract the first, then
 * slides over to add the next element and subtract the second, etc, until the
 * end of the arr is reached.
 * EG: (3 + 7 + 2 + (1 - 3) + (9 - 7) + (6 - 2) + (0 - 1) + (4 - 9) + (5 - 6)).
 *
 * Each size k elements (in this case k = 3) are stored in a temp variable. If
 * sliding the window results in larger sum than currently stored, it becomes
 * the temp variable. If the total length of the array is less than k (the size of
 * each subArr), the operations would not be possible.
 *
 * @param  {number} k size of each subArray
 * @param  {number[]} arr sorted or unsorted
 * @return {number} the largest sum of a subArray
 */

const slidingWindow = function(arr, k) {
    // STEP 0: declare temp variable and return variable for sum
    let tempSum = 0;  // will store each subArr sum for comparison
    let maxSum = 0;   // will store the max sum from a subArr

    // STEP 1: 
};

// STEP : define test parameters
let arr = [7, 5, 4, 1, 9, 0, 2, 3, 6];
let k = 3;

// STEP : invoke function to test