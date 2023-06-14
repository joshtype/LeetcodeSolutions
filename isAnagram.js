/**
 * Leetcode Problem isAnagram in Javascript.
 * Return true if two input strings are anagrams of each other, otherwise return false.
 * @param  {string} str1
 * @param  {string} str2
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    if(str1.length === str2.length) {
        // split strings into arrays, sort lexicographically,
        // rejoin split strings and compare values
        if(str1.split('').sort().join('') === str2.split('').sort().join('')) {
            // strings have equal length and lexicographic value
            return true;
        } else {
            // if lexicographic value not equal, cannot be anagrams
            return false;
        }
    } else {
        // if strings not equal len, cannot be anagrams
        return false;
    }
};