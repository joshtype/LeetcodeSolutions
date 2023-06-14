/**
 * @param {number} n
 * @return {boolean}
 */

 var isHappy = function(n) {
    var happy = false;  // return value
    var nums = {};      // to detect if loop is stuck
    var arr = [];       // empty arr to store digits
    var sum = 0;        // to add sums of squared digits

    // confirm n is positive
    while(n > -1) {
        // square each digit of n and add squares
        arr = String(n).split();  // cast each digit of int to Str & add to array
        for(let i = 0; i < arr.length; i++) {
            // cast back to int and square each value
            arr[i] = parseInt(arr[i]) * parseInt(arr[i]);
            // each index now contains the square of each digit
        }
        // add each squared digit to sum
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        // apply break condition for loop
        if(sum == 1) {

        }

        
        


    }
};