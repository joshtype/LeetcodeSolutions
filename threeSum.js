/*
    LEETCODE PROBLEM: threeSum; Medium Difficulty; Javascript
    TIME COMPLEXITY : 
    SPACE COMPLEXITY:

    EXPLANATION:
        Iterate an input arr of ints to find any and all triplets that sum to 0.
        Indices i !== j, i != k, j != k (ie, indices cannot be used twice).
        Different indices may contain the same value however.
        Triplets (ith + jth + kth) must == 0.
        Return an arr containing an arr of ea triplet (2D arr).

    APPROACH:
        Sort the input arr to avoid using two nested for-loops. Sorting requires O(n) vs
        O(n^3) of two nested for-loops within a parent loop. Iterate the input arr using 
        for...of loop to enumerate the elements. Add to the first index element the values
        from two pointers, left and right. Left starts adj to the first index while right
        starts at the last index. Sum the three indices to see if they sum to 0. If not,
        reduce the right pointer to reduce the sum or increase the left pointer to increase
        the sum. Once a valid triplet is found, add it to the return arr. After all possible
        triplets have been added, return the resulting 2D arr.
*/

/**
 * Search an input arr of ints and return all existing
 * triplets that sum to 0. Return a 2D arr containing
 * ea triplet in an arr.
 * Note: ith idx != jth, ith != kth, jth != kth.
 * @param  {number[]}  nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    if(nums.length < 3) {
        return [];
    }
    
    nums.sort(function(a,b){return a-b});
    let arr = [];

    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i-1]) continue;

        let j = i+1, k = nums.length-1;

        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if(sum > 0) {
                k--;
            } else if(sum < 0) {
                j++;
            } else {
                let sub = [nums[i], nums[j], nums[k]];
                arr.push(sub);

                j++; k--;
                while(j < k && nums[j] == nums[j-1]) {
                    j++;
                }
                while(j < k && nums[k] == nums[k+1]) {
                    k--;
                }
            }
        } 
    }
    return arr;
};

// Testing
let nums1 = [-1,0,1,2,-1,-4];
console.log(threeSum(nums1));  // expected output = [[-1,-1,2],[-1,0,1]]

let nums2 = [0,0,0]; 
console.log(threeSum(nums2));  // expected output = []

let nums3 = [0,1,1];
console.log(threeSum(nums3));  // expected output = [0,0,0]
