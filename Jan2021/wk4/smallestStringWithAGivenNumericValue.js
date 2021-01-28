/* Smallest String With A Given Numeric Value

The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.

The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

Example 1:

Input: n = 3, k = 27
Output: "aay"
Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.

Example 2:

Input: n = 5, k = 73
Output: "aaszz"
 

Constraints:

1 <= n <= 105
n <= k <= 26 * n
*/

// Slightly refined version of the below
var getSmallestString = function(n, k) {
    let stringArray = new Array(n);
    for (let i=0; i<n; i++) stringArray[i] = 'a';
    k -= n;
    let pos = n - 1;
    while (k > 0) {
        stringArray[pos] = String.fromCharCode((k < 26 ? k : 25) + 97); // 'a' is 97
        k -= 25;
        pos--;
    }
    return stringArray.join('');
};

// First attempt
var getSmallestString1 = function(n, k) {
    let stringArray = new Array(n).fill('a'); 
    // start with an array of 'a's of length n, which will join to make our string

    // the current string will have a "numeric value" of n, so we need (k - n) more
    let remaining = k - n; 
    
    // increase the numeric value of the characters in the string, working backwards
    let pos = n - 1;
    while (remaining > 0) {
        // use 'z' if remaining larger than 26, else use corresponding char
        const charToChange = (remaining < 26) ? remaining + 1 : 26;
        stringArray[pos] = String.fromCharCode(charToChange+96); // 'a' is 97
        // reduce remaining  by the numeric value of char - 1 to account for the 'a' that was already there
        remaining -= (charToChange - 1);
        pos--;
    }

    return stringArray.join('');
};

// basic test cases
const test = (n, k) => {
    console.log(n, k, getSmallestString(n, k));
}

test(1, 1);
test(3, 27);
test(5, 73);
test(105, 105);
test(105, 26*105);

