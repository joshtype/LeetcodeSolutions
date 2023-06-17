/**
 * LEETCODE PROBLEM: maxProfit Javascript Solution
 * TIME COMPLEXITY: O(n) increasing as size n of input array increases.
 * EXPLANATION: find the array's min value and the max value (must appear 
 * after min). Return the difference between the max and min. Return 0 if 
 * no profit possible, e.g. when the min value is in the last index.
 * NOTE: This is a simplified sliding window algorithm in which subArrays are
 * size k = 1. Ie, each element is a subArray, ie the arr is its own subArray,
 * as in set theory (a set is a subset of itself). It is thus easier to code 
 * and more readable to invoke Math.min() and Math.max().
 * 
 * @param  {number[]} prices
 * @return {number} maximum possible profit (or 0)
 */
var maxProfit = function(prices) {
    // STEP 0: declare variables to hold min/max values and return value
    var buyLow = 0;   // will store min value, must appear left of sellHigh
    var sellHigh = 1;  // will store max value, must appear right of buyLow
    var maxProfit = 0;  // will store max possible difference to return

    // STEP 1: ensure array len vs subArray len (size k = 1)
    if(prices.length < 1) {
        return 0;
    }
    // STEP 2: while there are indices to search right of buyLow
    while(sellHigh < prices.length) {
        if(prices[buyLow] < prices[sellHigh]) {
            // store current difference of subArrays in a temp variable
            let tempProfit = prices[sellHigh] - prices[buyLow];
            // assign temp profit to max profit
            maxProfit = Math.max(maxProfit, tempProfit);
        } else {
            // replace min value
            buyLow = sellHigh;
        }
        // STEP 3: increment sellHigh, re-execute loop logic to continue searching
        sellHigh++;
    }
    // STEP 4: after loop breaks, maxProfit is found, or 0 if not possible
    return maxProfit;
};

// STEP 5: define test parameters
var prices1 = [2, 1, 3, 4, 7, 9, 7, 8, 5];
var prices2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];


// STEP 6: invoke function to test
var max1 = maxProfit(prices1);  // expected output: 8 (max = 9, min = 1, maxProfit = max -  min)
var max2 = maxProfit(prices2);  // expected output: 0 (no profit possible as min appears in last index)
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

