/* Find K Closest Elements

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]

Constraints:
1 <= k <= arr.length
1 <= arr.length <= 104
arr is sorted in ascending order.
-104 <= arr[i], x <= 104
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;
    while (right - left + 1> k) {
        if (Math.abs(x - arr[left]) > Math.abs(arr[right] - x)) left++;
        else right --;
    }
    console.log(left, right);
    return arr.slice(left, right+1);
};

const test = (arr, k, x) => {
    console.log(arr, k, x, findClosestElements(arr, k, x));
}

test([1,2,3,4,5], 4, 3);
test([1,2,3,4,5], 4, -1);
test([1], 1, 1);