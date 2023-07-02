/* 
LEETCODE PROBLEM : topKFrequent; medium difficulty; Javascript
TIME COMPLEXITY  : O(k*n)
  Where k = the number of elements to search for and n = input arr length.

EXPLANATION:
    Iterate over an input array searching for k number of most frequent
  elements in the array. Return the elements in any order.
  Example I/O:
    Inputs: arr = [0, 1, 1, 2, 2, 2], k = 2
    Output: [1, 2] 

DESTRUCTURING AND ARROW NOTATION:
  Destructuring: ...arr & ...obj
    Unpacks an arr's values or and obj's properties into distinct variables.
        1) let arr = [5, 4, 3, 2, 1, 0]
        2) let newArr = [...arr.sort()]
        3) newArr == [0, 1, 2, 3, 4, 5]
  Arrow Notation: =>
    Used to simplify traditional syntax for anonymous functions.
        1) function (p) { return p + 1; } // remove function keyword...
        2) (p) => { return p + 1; }       // remove body and param brackets...
        3) p => return p + 1;             // remove return keyword...
        4) p => p + 1;                    // does same job as original code. 
*/

/**
 * Determines & returns k number of most frequent elements in the input arr.
 * @param  {number[]} nums input arr in which to find most frequent elements
 * @param  {number} k      number of most frequent elements
 * @return {number[]}      arr of k number of most frequent elements in input arr.
 */
var topKFrequent = function(nums, k) {
    // STEP 0: ensure that k <= nums
    if(k <= nums.length) {
        // STEP 1: if so, declare a map obj to store elements and occurence rates
        let mapObj = new Map;  // keys = ea unique element in the input arr
                           // values = count of ea element's occurences

        // STEP 2: iterate over each n in nums
        nums.forEach(n => {
            // 1a: key = n; val = 1 for first time n occurs, add 1 if n already a key
            mapObj.set(n, (mapObj.get(n) || 0) + 1);
        })
    
        // STEP 3: sort the map by greatest to least values
        mapObj = [...mapObj.entries()].sort((a, b) => b[1] - a[1]);
              // deconstruct the map to assign each of its elements a distinct variable
              // then sort the entries using an anonymous function 

        // STEP 4: get keys from map (each unique element in input arr)
        let keyArr = mapObj.map(arr => arr[0])
              // use an anonymous function to populate an arr from the map keys

        // STEP 5: slice top k elements, use to fill return arr
        keyArr = keyArr.slice(0, k);
            
        // STEP 6: return resulting arr
        return keyArr;

    } else {
      // 0a: if k > nums.length, instead of throwing an exception
      return "ERROR: array is not large enough to find the number of most frequent elements input for parameter k."
    }
};

// STEP 7: TESTING
var fnTest = function() {
    // average case
    let arr1 = [0, 0, 1, 1, 1, 2, 2, 2, 2];
    let k1 = 2;
    console.log("TEST 1 INPUTS: ARRAY =  [" + arr1 + "], k = " + k1);
    console.log("OUTPUT = [" + topKFrequent(arr1, k1) + "]\n");  // expected output: [2, 1]

    // edge case
    let arr2 = [2, 1, 3];
    let k2 = 1;
    console.log("TEST 2 INPUTS: ARRAY =  [" + arr2 + "], k = " + k2);
    console.log("OUTPUT = [" + topKFrequent(arr2, k2) + "]\n");  // expected output: [1] or [2] or [3]

    // edge case
    let arr3 = ["1"];
    let k3 = 2;
    console.log("TEST 3 INPUTS: ARRAY = [" + arr3 + "], k = " + k3);
    console.log("OUTPUT: [" + topKFrequent(arr3, k3) + "]\n");  // expected output: ["1"]
};

fnTest();
