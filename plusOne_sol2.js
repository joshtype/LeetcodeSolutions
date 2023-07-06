/*
    LEETCODE PROBLEM : plusOne; Easy Difficulty; Javascript
    TIME COMPLEXITY  : O(n), where n = length of input arr.

    EXPLANATION : 
        1) an input arr represents a large int
        2) ea arr idx stores 1 digit of the int
        3) the int must be incremented by 1
        4) result must be returned in an arr

    EXAMPLES : 
        1) Input: [1, 2, 3, 4], Output: [1, 2, 3, 5]
        2) Input: [9, 9, 9, 9], Output: [1, 0, 0, 0, 0]
*/

/**
 * @param  {number[]} digitsArr
 * @return {number[]}
 */
const plusOne = function(digitsArr) {
    // 0) declare two undefined fields for later
    let intFromArr; let intToStr;

    // 1) arr for return, len = input, fill w/ an int
    let resArr = new Array(digitsArr.length-1).fill(1);

    // 2) gather element digits into single int
    intFromArr = BigInt(digitsArr.join(""));

    // 3) add 1 to int and convert it to str
    intToStr = String(intFromArr + BigInt(1));

    // 4) iterate over the str
    for(let i = intToStr.length-1; i >= 0; i--) {
        // 4a) convert chars to int, add to return arr
        resArr[i] = Number.parseInt(intToStr[i]);
    }
    // 5) return the result
    return resArr;
};

// 4) TESTING:
let testArr1 = [1, 2, 3];        
console.log(plusOne(testArr1));  
    // expected output = [1, 2, 4]

let testArr2 = [9, 9, 9, 9];
console.log(plusOne(testArr2));  
    // expected output = [1, 0, 0, 0, 0]

let testArr3 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(testArr3));  
    // expected output = [6 ... 5, 5, 4, 4]
