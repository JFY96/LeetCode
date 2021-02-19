/* Arithmetic Slices

A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequences:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9

The following sequence is not arithmetic.

1, 1, 2, 5, 7
 
A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of the array A is called arithmetic if the sequence:
A[P], A[P + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.

 
Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.

*/

/**
 * @param {number[]} A
 * @return {number}
 * 
 */
var numberOfArithmeticSlices = function(A) {
    const length = A.length;
    if (length < 3) return 0;
    let ans = 0;
    for (let i=2, count = 0; i<length; i++) {
        if (A[i] - A[i-1] === A[i-1] - A[i-2]) {
            count++;
            ans += count; // e.g. [1, 2, 3, 4]: +1 for [1,2,3] then +2 on [2,3,4] as [1,2,3,4] is arithmetic
        } else {
            count = 0;
        }
    }
    return ans;
}

/**
 * @param {number[]} A
 * @return {number}
 * 
 * Previous Attempt
 */
var numberOfArithmeticSlices1 = function(A) {
    const length = A.length;
    if (length < 3) return 0;
    let ans = 0;
    for (let i=1, arithmeticlength = 2; i<length; i++) {
        if (i+1 < length && (A[i+1] - A[i]) === (A[i] - A[i-1])) { 
            arithmeticlength++;
            continue;
        }
        if (arithmeticlength > 2) {
            // e.g. if length is 5 (like [1, 2, 3, 4, 5] then there are 1 + 2 + 3 arithmetic slices
            ans += ((arithmeticlength - 2) * (arithmeticlength - 1)) / 2; 
        }
        arithmeticlength = 2;
    }
    return ans;
};


const test = (A) => {
    console.log(A, numberOfArithmeticSlices(A));
}

test([1, 2, 3, 4]);
test([0,2,1,2,3,4,5,7,9]);