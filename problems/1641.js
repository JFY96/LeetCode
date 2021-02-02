/* Count Sorted Vowel Strings

Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

Example 1:

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].

Example 2:

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.

Example 3:

Input: n = 33
Output: 66045

Constraints:

1 <= n <= 50 
*/

var countVowelStrings = function(n) {
    return countLetterStrings(n, 5);
};

// Recursive function to solve for problem
// x - number of available letters (e.g. vowels are 5)
var countLetterStrings = function(n, x) {
    // base case - when n=1 the number of options is just the number of letters available
    if (n === 1) return x;

    // n > 1, so need to work out recursively
    // e.g. n=2, the count will be 5+4+3+2+1
    // which is the same as (n=1,x=5)+(n=1,x=4)+...
    let count = 0;
    for (let i = x; i >= 1; i--) count += countLetterStrings(n-1, i);
    return count;
}

/* TEST */
const test = function(n) {
    console.log(`${n}: ${countVowelStrings(n)}`);
}

test(1);
test(2);
test(33);