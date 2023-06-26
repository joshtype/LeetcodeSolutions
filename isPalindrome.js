/*
LEETCODE PROBLEM : isPalindrome; easy difficulty; Javascript
TIME COMPLEXITY  : O(n) increasing with size n of input string.

EXPLANATION:
    Removes all non-alphanumeric characters from input string and 
    determines if the resulting string is a palindrome (words that 
    spell the same word when read in reverse). Returns true if the 
    input string is a palindrome, false if it is not a palindrome.
*/

// BEGIN CODE:
/**
 * Determines if the input string is a palindrome and return true if so. 
 * @param  {string} s
 * @return {boolean}
 */

const isPalindrome = function(s) {
    // STEP 0: store regular expression as variable
    const regex = /[^A-Za-z0-9]/g;  // chars A-Z, a-z, 0-9 globally

    // STEP 1: convert input str to lowercase
    s = s.toLowerCase();
    
    // STEP 2: replace non-alphanumeric chars with ''
    s = s.replace(regex, '');

    // STEP 3: split, reverse, rejoin input str & store in new var
    var t = s.split('').reverse().join('');

    // STEP 4: compare input str to new str, return result
    return s === t;  // true if strings are equal, else false
};

// STEP 5: define test parameters
var str1 = "raC%ec@ar";
var str2 = "g0-.%.-0g";
var str3 = "98%";

// STEP 6: invoke function to test
console.log(str1 + " is a palindrome = " + isPalindrome(str1));  // expected output = true
console.log(str2 + " is a palindrome = " + isPalindrome(str2));  // expected output = true
console.log(str3 + " is a palindrome = " + isPalindrome(str3));  // expected output = false

// END CODE