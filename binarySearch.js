/**
 * BINARY SEARCH ALGORITHM: Javascript Implementation:
 * TIME COMPLEXITY: O(log n) with input array of size n halved during search.
 * 
 * EXPLANATION: 
 *    Efficiently searches the sorted input array from left to right 
 * for the input target value. Continually halves the number of indices that
 * could hold the target value. The middle index is compared to the target value,
 * if the target value is greater, all indices to the right of the middle are
 * removed from the search. If the target value is less, all indices to the left
 * are removed from the search. This continues until the target is found or all
 * indices have been removed as possibilities. An unsorted arr must first be
 * sorted to use Binary Search, decreasing overall time complexity. This 
 * function, however, remains efficient at O(log n).
 *
 * @param  {number[]} arr
 * @param  {number}   target
 * @return {number}   index containing target value or -1 if target not found
 */

const binarySearch = function(arr, target) {
    // STEP 0: declare limits to establish a search range
    let upperBound = arr.length -1;
    let lowerBound = 0;
    let middle = 0;

    // edge case: target in 0th idx
    if(arr[0] === target) {
        return 0;
    // edge case: target not a number
    } else if(typeof target != 'number') {
        return -1;
    }

    // STEP 1: use loop to iterate through entire arr
    while(lowerBound <= upperBound) {
        // STEP 2: redefine mid to be the middle-most arr index (requires int)
        middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);

        // STEP 3: if true on first check, would be best case with O(1) time complexity
        if(target === arr[middle]) {
            // if middle index holds target val, return the middle index location (not the val held)
            return middle;
        }        
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

// STEP 7: define test parameters (arrays must be sorted)
var arr1 = [103, 104, 104, 108, 109, 111, 112];  // best case with target in first arr index
var tar1 = 103;

var arr2 = [4, 5, 6, 10, 11, 12, 100, 101, 301];  // worst case with target in last arr index
var tar2 = 301;

var arr3 = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];  // null case with target not present in arr
var tar3 = 999;

var arr4 = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];  // edge case with target not storing a number
var tar4 = "uno";

// STEP 8: invoke function to test each case
var test1 = binarySearch(arr1, tar1);  // return value of function stored in variable
// best case test -> expected output of 0
if(test1 > -1) {
    console.log(tar1 + " found in index number " + test1 + ".");
} else {
    console.log(tar1 + " not found in input array.");
}

var test2 = binarySearch(arr2, tar2);
// worst case test -> expected output of 8
if(test2 > -1) {
    console.log(tar2 + " found in index number " + test2 + ".");
} else {
    console.log(tar2 + " not found in input array.");
}

var test3 = binarySearch(arr3, tar3);
// null case test -> expected output of -1 (not found)
if(test3 > -1) {
    console.log(tar3 + " found in index number " + test3 + ".");
} else {
    console.log(tar3 + " not found in input array.");
}

var test4 = binarySearch(arr4, tar4);
// edge case test -> expected output of -1 (not found)
if(test4 > -1) {
    console.log(tar4 + " found in index number " + test4 + ".");
} else {
    console.log(tar4 + " not found in input array.");
}