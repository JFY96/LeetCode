/* Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

function isPalindrome(s: string): boolean {
	const getAlphaCharCode = (index: number): number => {
		// 0-9 -> 48-57 A,Z -> 65,90 a,z -> 97,122
		let code = s.charCodeAt(index);
		if (code >= 65 && code <= 90) code += 32; // change to lowercase
		if (code < 48 || (code > 57 && code < 97) || code > 122) return -1; // if not alpha char, return -1
		return code;
	}
	
	let i = 0;
	let j = s.length - 1;
	while (i < j) {
		const iCode = getAlphaCharCode(i);
		if (iCode === -1) {
			i++;
			continue;
		}
		const jCode = getAlphaCharCode(j);
		if (jCode === -1) {
			j--;
			continue;
		}
		if (iCode !== jCode) return false;
		i++
		j--;
	}
	return true;
};