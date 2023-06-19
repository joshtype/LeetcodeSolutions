/**
 * LEETCODE PROBLEM: isAnagram Javascript Solution:
 * TIME COMPLEXITY: O(n^2), increasing with sizes n of each input string.
 * 
 * EXPLANATION:
 *    Anagrams are words formed by rearranging the letters of another word, typically
 * using each letter once. To determine if two input strings are anagrammatic, the strings
 * must first be of equal lengths. If so, the strings must then be split into arrays such 
 * that each char is an arr element. The arrays are then sorted by lexicographic value and 
 * rejoined into strings. The resulting strings are then tested for equal lexicographic
 * value. If equal, the strings are anagrammatic. If inequal, they are not.
 * 
 * EXAMPLE: str = "cat" -> str.split('') = [c, a, t] -> str.sort() = [a, c, t] -> str.join('') = "act". 
 * 
 * @param  {string} str1
 * @param  {string} str2
 * @return {boolean} true if input strings are anagrammatic, false otherwise
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