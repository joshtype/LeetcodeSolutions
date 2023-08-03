/*
    LEETCODE PROBLEM: Container with the Most Water; Medium Difficulty; Javascript
    TIME COMPLEXITY : O(n), where n = length n of the input arr which is iterated
                      using two pointers and a while loop.
    SPACE COMPLEXITY: 

    EXPLANATION:
        An input arr of integers is given called 'height'. Each element in the input
        arr refers to a height of a container's sides. Iterate the arr to find
        and return the max amount of water the container could hold without spilling
        over.
    APPROACH:
        1. Iterate the arr from front and back using two pointers. In each loop, the 
        pointers point to a side of the container with its base equal to the length 
        of the sub-arr between the left and right sides' indices. Since the max area
        of water storage possible in any container depends on the lesser side's height,
        calculate the area as base * lesser height.
        2. Iterate the input arr using a while loop. Exit the loop when j = k. Since the
        area of a physical object or space is being calculated, the result must be 
        non-negative and non-zero. If j = k, a duplicate value would be used when calculating
        the area. This is the same as forming a container with a missing side or a side
        with a value of 0. 
        3. Compare the area of each container to that of the previous (the first will 
        compare to an area of 0). If the current area is greater, reassign the return 
        field 'maxArea' with the greater value. 
        4. After this, increment j or decrement k and reloop. Determine which pointer to 
        move based on whichever is leser. If the jth side is lesser than the kth, it's 
        possible that the current kth is the greatest value in the arr so it's efficient
        to keep it at its current value and increment j by 1. Conversely, if the kth side
        is lesser, the current jth side may be the greatest height so k should decrement.
        5. After calculating the area of all possible containers, the return field will 
        store the max area of water storage from all the containers. 
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length;

    // base case: input arr too small
    if(len < 2) {
        // must have 2+ possible sides
        return 0;
    }

    // if len >= 2, init left/right pointers & a return field
    let j = 0, k = len-1;
    let maxArea = 0;

    // cannot duplicate elements so loop must exit if j==k
    while(j < k) {
        // base x = len of sub-arr from jth to kth idx
        let x = (len-j) + (k-len);

        // height based on lesser of each side
        let y = Math.min(height[j], height[k]);

        // calc water storage area of current container
        let tempArea = (x * y);

        // if current area greater than previous
        if(tempArea > maxArea) {
            maxArea = tempArea;  // reassign
        }
        
        // reloop to form a new container
        if(height[j] > height[k]) {
            // keep j at current value
            k--;
        } else if(height[j] < height[k]) {
            // keep k at current value
            j++;
        } else {
            // if jth == kth, either is valid
            j++;
        }
    }
    // after calculating areas of all possible containers
    return maxArea;
};

// TESTING
let h1 = [1,8,6,2,5,4,8,3,7];
console.log("TEST 1: " + maxArea(h1));
    // expected output = 49

let h2 = [1,9,2,8,3,7,4,6,5,0];
console.log("TEST 3: " + maxArea(h2));
    // expected output = 36

let h3 = [1,1];
console.log("TEST 2: " + maxArea(h3));
    // expected output = 1

let h4 = [9];
console.log("TEST 4: " + maxArea(h4));
    // expected output = 0
