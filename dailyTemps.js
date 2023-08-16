/**
 * Iterate an input arr of daily temperatures.
 * Form a new array that contains the number 
 * of days from each index to the closest day
 * that follows that has a warmer temperature.
 * If a day isn't followed by a wamer day, use 0.
 * Eg: input = [73, 74]; output = [1, 0].
 * @param  {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // base cases: input arr len too small
    if(temperatures.length < 1) {
        return [];
    }
    if(temperatures.length === 1) {
        return [0];
    }
    
    let len = temperatures.length;
    let answer = new Array(len).fill(0);
    let data = new Array();  // stack

    let prev = temperatures[0];
    for(let i = 1; i < len-1; i++) {
        let crnt = temperatures[i];

        
    }

};

// testing
let temps1 = [73,74,75,71,69,72,76,73];
dailyTemperatures(temps1);  // expected output = [1,1,4,2,1,1,0,0]

let temps2 = [30,40,50,60];
dailyTemperatures(temps2);  // expected output = [1,1,1,0]
