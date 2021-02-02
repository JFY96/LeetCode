/* 	Check If All 1's Are at Least Length K Places Away

Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False. 

Example 1:

Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

Example 2:

Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.

Example 3:

Input: nums = [1,1,1,1,1], k = 0
Output: true

Example 4:

Input: nums = [0,1,0,1], k = 1
Output: true

Constraints:

1 <= nums.length <= 105
0 <= k <= nums.length
nums[i] is 0 or 1
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let placesAway = k; // initialise count to k to skip the first 1
    for (let i = 0, length = nums.length; i < length; i++) {
        if (nums[i] === 1) {
            if (placesAway < k) { // if zeroes between the 1s is less than k, then the answer is false
                return false; 
            }
            placesAway = 0; // reinitialise places between 1s
        } else {
            placesAway++; // increase counter as number is not 1
        }
    }
    return true;
}

const test = (nums, k) => {
    console.log(nums, k, kLengthApart(nums, k));
}

test([1,0,0,0,1,0,0,1], 2);
test([1,0,0,1,0,1], 2);
test([1,1,1,1,1], 0);
test([0,1,0,1], 1);