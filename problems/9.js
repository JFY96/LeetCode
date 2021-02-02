/* Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not. 

Example 1:

Input: x = 121
Output: true

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:

Input: x = -101
Output: false
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

var isPalindrome = function(x) {
    if (x < 0) return false; // negative numbers can't be a palindrome
    const digits = Math.floor(Math.log10(x)) + 1;
    for (let i = 0, j = digits-1; i < j; i++, j--) {
        // Check the digits at each side of the number
        if (Math.floor(x/(Math.pow(10,i)) % 10) !== Math.floor(x/(Math.pow(10,j)) % 10)) {
            return false;
        }
    }
    return true;
};

const test = (x) => {
    console.log(x, isPalindrome(x));
}

// test(1);
// test(121);
// test(-121);
// test(10);
// test(-101);
// test(-231);
// test(231);
test(13231);
// test(11111);
// test(111111111);
// test(1111111121);