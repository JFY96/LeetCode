/* Complement of Base 10 Integer

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer n, return its complement.

Example 1:
Input: n = 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

Example 2:
Input: n = 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

Example 3:
Input: n = 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.

Constraints:
0 <= n < 109

Note: This question is the same as 476: https://leetcode.com/problems/number-complement/

*/

const bitwiseComplement = (n: number): number => {
	// e.g. 101 XOR 111 is 010 and we can use power of 2 - 1 to get 111...
	// return n ^ (Math.pow(2, n.toString(2).length) - 1);

	// Better Method to get 111... is (1 << n) - 1
	// e.g. 1 << 3 is 1000 then if you minus 1 its 111
	return n ^ ((1 << n.toString(2).length) - 1);
};

const test = (n: number): void => {
	console.log(`Complement of ${n} is ${bitwiseComplement(n)}`);
};

test(5);
test(7);
test(10);

export {};