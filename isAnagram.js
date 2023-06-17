/**
 * LEETCODE PROBLEM: isAnagram Javascript Solution
 * Anagrams are words formed by rearranging the letters of another word, typically
 * using each letter once.
 * Returns true if two input strings are anagrams of each other, false otherwise.
 * @param  {string} str1
 * @param  {string} str2
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // STEP 0: base case = strings must be equal length to be anagrams
    if(s.length === t.length) {
        // STEP 1: split strings at every char, sort lexicographically,
        // rejoin at every char, and compare resulting strings
        if(s.split('').sort().join('') === t.split('').sort().join('')) { 
            // STEP 2: if strings have equal length and lexicographic value
            return true;
        } else {
            // STEP 3: if resulting strings are not equal, cannot be anagrams
            return false;
        }
    } else {
        // STEP 0 (cont): strings must have equal lengths to be anagrams
        return false;
    }
};

// STEP 4: define test parameters
var s1 = "angered";
var t1 = "enraged";
var s2 = "brush";
var t2 = "shrub";
var s3 = "nope";
var t3 = "nah";

// STEP 5: invoke function to test
console.log(s1 + " & " + t1 + " are " + isAnagram(s1, t1) + " anagrams.");  // expected output: true
console.log(s2 + " & " + t2 + " are " + isAnagram(s2, t2) + " anagrams.");  // expected output: true
console.log(s3 + " & " + t3 + " are " + isAnagram(s3, t3) + " anagrams.");  // expected output: false