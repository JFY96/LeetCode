/* Score of Parentheses

Given a balanced parentheses string S, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.

Example 1:
Input: "()"
Output: 1

Example 2:
Input: "(())"
Output: 2

Example 3:
Input: "()()"
Output: 2

Example 4:
Input: "(()(()))"
Output: 6

Note:

S is a balanced parentheses string, containing only ( and ).
2 <= S.length <= 50
*/

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let stackLength = 0;
    let totalScore = 0;
    let currentLevel = 0;
    for (let i=0, length=S.length; i<length; i++) {
        if (S.charAt(i) == "(") {
            stackLength++;
            if (stackLength != currentLevel) currentLevel++;
        } else { // ")"
            if (currentLevel > stackLength) {
                 currentLevel--;
            } else {
                totalScore += Math.pow(2, stackLength-1);
            }
            stackLength--;
        }
    }
    return totalScore;
};

const test = (S) => {
    console.log(S, scoreOfParentheses(S));
}

test("()");
test("(())");
test("()()");
test("(()(()))");
test("((())())");
test("((()(())()))");