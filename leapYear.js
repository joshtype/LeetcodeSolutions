/** 
 * Leap Year Calculator
 * Leap years are divisible by 4
 * But not by 100 
 * Unless its also divisble by 400
 */
function isLeapYear(year) {
    // step 1: declare boolean value as false
    var leapYear = false;
    // step 2: apply formula
    if(year % 4 == 0) {
        if(year % 100 == 0 && year % 400 == 0) {
            leapYear = true;
            return leapYear;
        } 
    } else {
        return leapYear;
    }
}

// test function
function test() {
    console.log("1997 = leap year: " + isLeapYear());
    console.log("2000 = leap year: " + isLeapYear());
}

// execute test (after saving)
test();