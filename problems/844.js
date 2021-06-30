/* Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".

Example 4:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.

Follow up: Can you solve it in O(n) time and O(1) space?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return formatStringAfterBackspaces(s) === formatStringAfterBackspaces(t);
};

const formatStringAfterBackspaces = (s) => {
    let str = "";
    for (let i = 0, n = s.length; i < n; i++) {
        const char = s.charAt(i);
        if (char !== "#") str += char;
        else if (i > 0) str = str.slice(0, -1);
    }
    return str;
}

const test = (s, t) => {
    console.log(s,t,backspaceCompare(s, t));
}

test("ab#c", "ad#c");
test("ab##", "c#d#");
test("a##c", "#a#c");
test("a#c", "b");
test("#b", "b");
test("#", "a#c#");