/**
 * BINARY SEARCH ALGORITHM: Javascript Implementation
 * TIME COMPLEXITY: O(log n) with input array of size n halved during search.
 * EXPLANATION: Efficiently searches the sorted input array from left to right 
 * for the input target value. Continually halves the number of indices that
 * could hold the target value. The middle index is compared to the target value,
 * if the target value is greater, all indices to the right of the middle are
 * removed from the search. If the target value is less, all indices to the left
 * are removed from the search. This continues until the target is found or all
 * indices have been removed as possibilities. An unsorted arr must first be
 * sorted to use Binary Search, decreasing overall time complexity. This 
 * function, however, remains efficient at O(log n).
 * @param  {number[]} arr
 * @param  {number}   target
 * @return {number}   index containing target value or -1 if target not found
 */

const binarySearch = function(arr, target) {
    // STEP 0: declare limits to establish a search range
    let upperBound = arr.length -1;
    let lowerBound = 0;
    let middle = 0;

    // STEP 1: use loop to iterate through entire arr
    while(lowerBound <= upperBound) {
        // STEP 2: redefine mid to be the middle-most arr index (requires int)
        middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);

        // STEP 3: middle index holds the target value,
        if(target === arr[middle]) {
            // finding on first check = best case with O(1) time complexity 
            return middle;
        }

        /* Until the above condition evals as true, or the loop breaks, the following is repeated: */
        
        // STEP 4: if target is lesser, it must be in the lower left half of the arr
        else if(target < arr[middle]) {
            // set the highest possible index to the index before the middle-most index
            upperBound = middle - 1;
        }

        // STEP 5: if target is greater, it must be in the higher right half of the arr
        else {
            // set the lowest possible index to the index after the middle-most index
            lowerBound = middle + 1;
        }
    }
    // STEP 6: if the while loop breaks, the search range has encompassed every index
    return -1;  // without finding an index to return
};

// STEP 7: define test parameters (sorted arr and a )
var arr1 = [4, 5, 6, 10, 11, 12, 100, 101, 102];
var tar1 = 102;  // worst case
var arr2 = [0, 0, 0, 1, 1, 1, 2, 2, 2];
var tar2 = 3;    // not present

// STEP 8: invoke function to test
var test1 = binarySearch(arr1, tar1);  // expected output: 8
if(test1 > -1) {
    console.log("Found " + tar1 + " at index location " + test1 + ".");
} else {
    console.log("Could not find " + tar1 + " in the given array.");
}

var test2 = binarySearch(arr2, tar2);  // expected output: -1
if(test2 > -1) {
    console.log("Found " + tar2 + " at index location " + test1 + ".");
} else {
    console.log("Could not find " + tar2 + " in the given array.");
}