/* Valid Anagram

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const length = s.length;
    if (length != t.length) return false;

    let chars = new Map();
    for (let i = 0; i < length; i++) {
        const char = s.charAt(i);
        chars.set(char, chars.has(char) ? chars.get(char) + 1 : 1);
        const char2 = t.charAt(i);
        chars.set(char2, chars.has(char2) ? chars.get(char2) - 1: -1);
    }

    for (let char of chars) {
        if (char[1] != 0) return false;
    }

    return true;
};

const test = (s, t) => {
    console.log(s, t, isAnagram(s, t));
}

test("anagram", "nagaram");
test("rat", "car");