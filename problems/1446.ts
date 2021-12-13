/* Consecutive Characters

The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.


Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

Example 3:
Input: s = "triplepillooooow"
Output: 5

Example 4:
Input: s = "hooraaaaaaaaaaay"
Output: 11

Example 5:
Input: s = "tourist"
Output: 1


Constraints:
1 <= s.length <= 500
s consists of only lowercase English letters.
*/

const maxPower = (s: string): number => {
	let max = 0;
	for (let i = 0, n = s.length, count = 0, prev = ''; i < n; i++) {
		const char = s.charAt(i);
		if (prev !== char) count = 0;
		prev = char;
		count++;
		if (count > max) max = count;
	}
	return max;
};

const test = (s: string): void => {
	console.log(`${s} has power ${maxPower(s)}`);
};

test('leetcode');
test('abbcccddddeeeeedcba');
test('triplepillooooow');
test('hooraaaaaaaaaaay');
test('tourist');

export {};