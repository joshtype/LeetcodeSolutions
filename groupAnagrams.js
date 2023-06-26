/**
 * LEETCODE PROBLEM : groupAnagrams
 * TIME COMPLEXITY  :
 * SPACE COMPLEXITY :
 * EXPLANATION:
 *    Iterate through input array of strings searching for anagrammatic words.
 * Add words that are anagrammatic to a shared array. Add each of these arrays
 * to another 2-D array. Return the 2-D array. All characters are lowercase and 
 * ordering of anagrams or the order of subarrs in the return arr doesnt matter.
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
    // keys = input arr elements split & sorted & values = arr of anagrammatic word
    let mappy = new Map;
    // empty array to fill with subarrays of anagrams
    let ansarr = [];

    // iterate elements of input array
    for(let str of strs) {
        // split each str element into an arr and sort lexicographically
        let sorted = str.split('').sort();  // sorted = keys; str = values

        // check if map already contains the split & sorted str
        if(mappy[sorted]) {
            // if it does, add the key's value (original str) to an arr
            mappy[sorted].push(str);
        } else {
            // if it doesn't, assign a new arr with the original str as the value
            mappy[sorted] = [str];
        }
        // each value of the map should now be an arr of anagrammatic words
    }
    // grab the values (arrays of anagrams) from the map and add to the return arr
    for(let key in mappy) {
        ansarr.push(mappy[key]);
    }
    return ansarr;
};
// TESTING (constraints = all lowercase letters, no null or empty inputs)
let strArr1 = ["cat", "tea", "act", "tan", "eat", "ant", "ate", "bat"];  // avg case
console.log("TEST 1: AVERAGE CASE:")
console.log(groupAnagrams(strArr1));

let strArr2 = ["1", "+", "1", "==", "=", "two", "wot"];  // edge case
console.log("TEST 2: EDGE CASE:");
console.log(groupAnagrams(strArr2));


