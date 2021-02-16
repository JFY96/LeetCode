/* Letter Case Permutation

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.

Example 1:

Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:

Input: S = "3z4"
Output: ["3z4","3Z4"]

Example 3:

Input: S = "12345"
Output: ["12345"]

Example 4:

Input: S = "0"
Output: ["0"]
 

Constraints:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    const ans = [];
    const length = S.length;
    // recursively get all the combinations
    const iterate = (string, index) => {
        if (string.length === length) {
            ans.push(string);
            return;
        }
        const char = S.charAt(index);
        iterate(string + '' + char, index + 1);
        if (char >= 'A') { // not a number (so also iterate for uppercase or lowercase)
            iterate(string + '' + (char < 'a' ? char.toLowerCase() : char.toUpperCase()), index + 1);
        }
    };
    iterate('', 0);
    return ans;
};

const test = (S) => {
    console.log(S, letterCasePermutation(S));
}

test("a1b2");
test("3z4");
test("12345");
test("0");
test("abcd");