/* Set Mismatch

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let sum = 0;
    let duplicate = -1;
    const numSet = new Set();
    for (let num of nums) {
        sum += num;
        if (duplicate != -1) continue;
        if (numSet.has(num)) duplicate = num;
        else numSet.add(num);
    }
    const n = nums.length;
    const nSum = (n * (n + 1)) / 2;
    return [duplicate, nSum-sum+duplicate];
};

const test = (nums) => {
    console.log(nums, findErrorNums(nums));
}

test([1,2,2,4]);
test([1,1]);
test([2,2]);
test([3,2,2]);