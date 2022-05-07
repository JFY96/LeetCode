/* 132 Pattern

Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Example 1:
Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.

Example 2:
Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

Example 3:
Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
 

Constraints:
n == nums.length
1 <= n <= 2 * 105
-109 <= nums[i] <= 109
*/

/*
Using a Monotonic Stack

Requirement: for i < j < k, return true if there is nums[i] < nums[k] < nums[j]

Use stack to handle 32 / kj pattern by traversing from right to left, similar to 'Next greater value on right' stack problem.
- Have a variable store the k value (initialize as minimum number / -infinity).
- Push current value onto stack at the end of each loop.
- If current value is larger than top of stack (stack not empty), then this satisfies nums[j] > nums[k],
so assign the value pop'd from the stack as new k value.
- Keep popping (and assigning as new k value) as long as current value is greater than top of stack,
as this will give us the maximum number nums[k] can be.

Now to satisfy 132, 1 also needs to be less than 3.

Check on each loop if the current value is less than our current k value.
- This will mean it satisfies nums[i] < nums[k] as our k value is initialized to MIN_VALUE
- As our k value will only be assigned a value other than its initial MIN_VALUE when nums[j] > nums[k],
as this is handled by the stack, this also means nums[i] < nums[k] < num[j]
- This mean the condition we are looking for is true, so return true 
*/
function find132pattern(nums: number[]): boolean {
	const n: number = nums.length;
	if (n < 3) return false;
	
	const stack: number[] = [];
	let kVal = -Number.MAX_VALUE;
	for (let i = n - 1; i > -1; i--) {
		if (nums[i] < kVal) return true;
		while (stack.length && nums[i] > stack[stack.length - 1]) {
			kVal = stack.pop() ?? kVal;
		}
		stack.push(nums[i]);
	}
	return false;
}

// Brute Force Attempt - for i < j < k, 
// nums[j] needs to be the largest number so loop through j
// and find minimum nums[i] and maximum nums[k] to check valid
//
// Time Complexity O(n^2)
//
// Note this is too slow for large examples.
function find132pattern2(nums: number[]): boolean {
	const n: number = nums.length;
	if (n < 3) return false;

	for (let j = 1; j < n - 1; j++) {
		let iValid = false;
		let iMin = Number.MAX_VALUE;
		for (let i = 0; i < j; i++) {
			if (nums[j] > nums[i]) {
				iValid = true;
				iMin = Math.min(iMin, nums[i]);
			}
		}
		let kValid = false;
		let kMax = -Number.MAX_VALUE;
		for (let k = j + 1; k < n; k++) {
			if (nums[j] > nums[k]) {
				kValid = true;
				kMax = Math.max(kMax, nums[k]);
			}
		}

		if (iValid && kValid && iMin < kMax) return true;
	}
	return false;
};