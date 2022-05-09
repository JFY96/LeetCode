/* Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

2 - abc
3 - def
4 - ghi
5 - jkl
6 - mno
7 - pqrs
8 - tuv
9 - wxyz

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

function letterCombinations(digits: string): string[] {
	const map: { [x: string]: string[] } = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'] ,
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z'],
	};

	const combinations: string[] = [];
	const splitDigits = digits.split('');

	const addToCombinations = (digitIndex = 0, currentStr = ''): void => {
		const d = splitDigits[digitIndex];
		if (d) {
			for (const char of map[d]) {
				const newStr = currentStr + char;
				if (digitIndex + 1 === splitDigits.length) {
					combinations.push(newStr);
				} else {
					addToCombinations(digitIndex + 1, newStr);
				}
			}
		}
	}
	addToCombinations();

	return combinations;
};

export default letterCombinations;