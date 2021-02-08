/* Shortest Distance to a Character

Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the shortest distance from s[i] to the character c in s.


Example 1:

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]

Example 2:

Input: s = "aaab", c = "b"
Output: [3,2,1,0]
 

Constraints:

1 <= s.length <= 10^4 
s[i] and c are lowercase English letters.
c occurs at least once in s.
*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * 
 * First attempt
 */
var shortestToChar1 = function(s, c) {
    let distance = [];
    const chars = s.split('');
    const length = chars.length;

    // Loop through characters, keeping track of position for most recent 'c' character
    for (let i = 0, cPos = -1; i < length; i++) {
        if (chars[i] == c) { // If character matches 'c' then distance is 0, and keep track of position
            distance[i] = 0;
            cPos = i;
        } else if (cPos == -1) { // if no character 'c' before this, store the distance as -1 for now
            distance[i] = -1;
        } else { // work out distance
            distance[i] = i - cPos;
        }
    }

    // Repeat but start from the other end, and take the minimum for actual distance
    for (let i = length - 1, cPos = -1; i >= 0; i--) {
        if (chars[i] == c) { // If character is c then keep track of position
            cPos = i;
        } else if (cPos !== -1) { // skip cPos of -1 (its after first 'c' character from the back)
            // We take the minimum of current and new calculated distance
            // But if distance is currently -1, just use new
            distance[i] = (distance[i] == -1) ? cPos - i : Math.min(distance[i], cPos - i);
        }
    }

    return distance;
};

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * 
 * Refined version of the above answer
 * 
 * numbers for cPos chosen as length is less than 10^4 
 * (any number larger or smaller works as long as it does not overflow)
 */
var shortestToChar = function(s, c) {
    const length = s.length;
    let distance = new Array(length);

    let cPos =  -1001;
    for (let i = 0; i < length; i++) {
        if (s.charAt(i) === c) cPos = i;
        distance[i] = i - cPos;
    }

    cPos = 2002;
    for (let i = length - 1; i >= 0; i--) {
        if (s.charAt(i) === c) cPos = i;
        distance[i] = Math.min(distance[i], cPos - i);
    }

    return distance;
};

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * 
 * Alternative answer using same ideas 
 */
var shortestToChar2 = function(s, c) {
    const length = s.length;
    let distance = [];
    distance[0] = s.charAt(0) === c ? 0 : 1001;
    for (let i = 1; i < length; i++) {
        distance[i] = s.charAt(i) === c ? 0 : distance[i-1] + 1;
    }
    for (let i = length - 2; i >= 0; i--) {
        distance[i] = Math.min(distance[i], distance[i+1] + 1);
    }
    return distance;
};

const test = (s, c) => {
    console.log(s, c, shortestToChar(s, c));
}

test("loveleetcode", 'e');
test("aaab", 'b');