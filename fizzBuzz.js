/** 
 * FizzBuzz Interview Problem
 * Array of 100 values (ints)
 * if n % 3 == 0, index = 'fizz'
 * if n % 5 == 0, index = 'buzz'
 * if both are true, index = "fizzBuzz"
 */
function fizzBuzz() {
    // step 1: declare empty array
    var arr = [];

    // step 2: determine random starting value
    var n = Math.floor(Math.random() * 100);

    // step 3: populate array with 100 values from n
    for(let i = 0; i < 100; i++) {
        // step 3a: check n for modulo rules
        if(n % 3 == 0 && n % 5 == 0) {
            arr[i] = "fizzBuzz";
        } else if(n % 3 == 0 && n % 5 != 0) {
            arr[i] = "fizz";
        } else if(n % 3 != 0 && n % 5 == 0) {
            arr[i] = "buzz";
        } else {
            arr[i] = n;
        }
        // step 3b: increment n
        n++;
    }
    // step 4: print arr to console
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// driver method
function test() {
    console.log("test 1");
    fizzBuzz();
}
test();
// run code
