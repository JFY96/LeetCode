/* Remove All Adjacent Duplicates in String II

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
 

Constraints:
1 <= s.length <= 105
2 <= k <= 104
s only contains lower case English letters.
*/

// Stack based solution
function removeDuplicates(s: string, k: number): string {
	const stack: Array<{ 0: string, 1: number }> = [];
	const n = s.length;
	for (let i = 0; i < n; i++) {
		const char = s.charAt(i);
		const len = stack.length;

		if (len > 0 && stack[len-1][0] == char) {
			stack[len-1][1]++;
		} else {
			stack.push([char, 1]);
		}

		if (len > 0 && stack[len-1][1] === k) stack.pop();
	}
	return stack.reduce((prev, val) => prev + val[0].repeat(val[1]), '');
};

// Solution that works with string directly
function removeDuplicates2(s: string, k: number): string {
	let i = 0;
	let count = 1;
	while (i < s.length) {
		count = (i > 0 && s.charAt(i-1) === s.charAt(i)) ? count + 1 : 1;

		if (count === k) {
			s = s.slice(0, i-k+1) + s.slice(i+1);
			count = 1;
			i = i-k+1;
			// if one before current is the same (since a chunk of k long was just removed), 
			// we need to go back up until its not the same. But that is difficult to check, 
			// so just go back a maximum of k-1 steps
			if (i > 0 && s.charAt(i-1) === s.charAt(i)) i = (i < k) ? 0 : i-k+1;
		} else {
			i++;
		}
	}
	return s;
};

const test = (s: string, k: number): void => {
	console.log(`k: ${k} s: '${s}' - output ${removeDuplicates(s, k)}`);
}

test('abcd', 2);
test('deeedbbcccbdaa', 3);
test('pbbcggttciiippooaais', 2);
test('yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4);
test('viittttttiiiillllkkkkkkllllllkkkkkkllkkkkkkcnoooossssssooasu', 6);

export {};