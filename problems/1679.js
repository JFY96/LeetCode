/* Max Number of K-Sum Pairs

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
	let operations = 0;
	let counts = new Map();
	// loop over the numbers to store count of each number, and try match with a complement each iteration
	for (const num of nums) {
		if (num >= k) continue;
		const complementCount = counts.get(k-num);
		if (complementCount) {
			operations++;
			counts.set(k-num, complementCount - 1);
		} else {
			counts.set(num, (counts.get(num) || 0) + 1);
		}
	}
	return operations;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations_old = function(nums, k) {
    let operations = 0;
    const kEven = (k % 2 === 0);
    const halfOfK = kEven ? k/2 : Math.floor(k/2);

    // loop over the numbers to store count of each number
    let counts = new Map();
    for (const num of nums) {
        if (num >= k) continue;
        let count = counts.get(num) || 0;
        counts.set(num, ++count);
    }
    
    // now iterate over new map to check for matches
    for (let [key, value] of counts) {
        if (key > halfOfK) continue; // only need to check the other half of the pair x + (k - x)
        if (key >= k) continue; // no possible pair with this number since they are >1
        if (kEven && key === halfOfK) {
            operations += (value % 2 === 0) ? value/2 : Math.floor(value/2);
        } else if (counts.has(k-key)) {
            operations += Math.min(value, counts.get(k-key));
        }
    }
    return operations;
};

/* TEST */
const test = function(nums, k) {
    console.log(`Number of pairs in ${nums} that add up to ${k}: ${maxOperations(nums, k)}`);
}

test([1,2,3,4], 5);
test([3,1,3,4,3], 6);
test([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2);