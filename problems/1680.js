/* Concatenation of Consecutive Binary Numbers

Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 10^9 + 7.

Example 1:

Input: n = 1
Output: 1
Explanation: "1" in binary corresponds to the decimal value 1. 

Example 2:

Input: n = 3
Output: 27
Explanation: In binary, 1, 2, and 3 corresponds to "1", "10", and "11".
After concatenating them, we have "11011", which corresponds to the decimal value 27.

Example 3:

Input: n = 12
Output: 505379714
Explanation: The concatenation results in "1101110010111011110001001101010111100".
The decimal value of that is 118505380540.
After modulo 10^9 + 7, the result is 505379714. 

Constraints:

1 <= n <= 105
*/

/** First attempt - create the concatenation string then parse string back to decimal
 *  This FAILS with large numbers since it goes beyond the "safe" threshold for ints
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary1 = function(n) {
    const binaryConcat = (n) => {
        return (n >= 2 ? binaryConcat(n-1) : "") + "" + n.toString(2);
    }
    return parseInt(binaryConcat(n), 2) % (Math.pow(10, 9) + 7);
};

/*
Bitwise operators solution
 */
var concatenatedBinary2 = function(n) {
    let length = 0;
    let result = 0;
    for (let i=1; i<=n; i++) {
        if ((i & (i - 1)) == 0) length++;
        // equivalent to (result << length) | i , but bitwise operators cast to int32
        // which is not enough for this problem
        result = (result * Math.pow(2,length) + i) % 1000000007; 
    }
    return result % 1000000007;
};

// Refined version of the above
var concatenatedBinary = function(n) {
    let result = 1, shift = 4;
    for (let i = 2; i <= n; i++) {
        if (i === shift) shift <<= 1;
        result = (result * shift + i) % 1000000007;
    }
    return result;
};

// basic test cases
const test = (n) => {
    console.log(n, "-", concatenatedBinary(n));
}

test(1);
test(3);
test(12);
test(42);
test(105);