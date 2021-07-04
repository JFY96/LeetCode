/* Count Vowels Permutation

Given an integer n, your task is to count how many strings of length n can be formed under the following rules:

Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
Each vowel 'a' may only be followed by an 'e'.
Each vowel 'e' may only be followed by an 'a' or an 'i'.
Each vowel 'i' may not be followed by another 'i'.
Each vowel 'o' may only be followed by an 'i' or a 'u'.
Each vowel 'u' may only be followed by an 'a'.
Since the answer may be too large, return it modulo 10^9 + 7.

Example 1:
Input: n = 1
Output: 5
Explanation: All possible strings are: "a", "e", "i" , "o" and "u".

Example 2:
Input: n = 2
Output: 10
Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".

Example 3: 
Input: n = 5
Output: 68

Constraints:
1 <= n <= 2 * 10^4
*/

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let a = e = i = o = u = 1;
    const MOD = (10 ** 9) + 7;
    if (n > 1) {
        let a_temp, e_temp, i_temp, o_temp, u_temp;
        for (let j = 2; j <= n; j++) {
            a_temp = (e + i + u) % MOD;
            e_temp = (a + i) % MOD;
            i_temp = (e + o) % MOD;
            o_temp = i;
            u_temp = (i + o) % MOD;
            a = a_temp, e = e_temp, i = i_temp, o = o_temp, u = u_temp;
        }
    }
    return (a+e+i+o+u) % MOD;
};

// First attempt - recursion - call stack size is exceeded on large test cases
var countVowelPermutation1 = function(n) {
    const recursiveCountByVowel = (n) => {
        if (n == 1) return new Array(5).fill(1); // 5 vowels of length 1
        const prev = recursiveCountByVowel(n-1);
        return [
            prev[1] + prev[2] + prev[4], // 0 - a
            prev[0] + prev[2], // 1 - e
            prev[1] + prev[3], // 2 - i
            prev[2], // 3 - o
            prev[2] + prev[3], // 4 -u
        ];
    };
    return recursiveCountByVowel(n).reduce((accum, val) => accum + val, 0) % ((10 ** 9) + 7);
};

const test = (n) => {
    console.log(n, countVowelPermutation(n));
}

test(1); // 5
test(2); // 10
test(3); // 19
test(5); // 68
test(144); // 18208803
test(20000);