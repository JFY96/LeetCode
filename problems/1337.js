/* The K Weakest Rows in a Matrix

Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

 

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 2 
row 1 -> 4 
row 2 -> 1 
row 3 -> 2 
row 4 -> 5 
Rows ordered from the weakest to the strongest are [2,0,3,1,4]


Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 1 
row 1 -> 4 
row 2 -> 1 
row 3 -> 1 
Rows ordered from the weakest to the strongest are [0,2,3,1]
 

Constraints:

m == mat.length
n == mat[i].length
2 <= n, m <= 100
1 <= k <= m
matrix[i][j] is either 0 or 1.

*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 * 
 * first attempt - brute force by sorting 
 */
var kWeakestRows1 = function(mat, k) {
    // get number of 1s for each row
    let ones = new Map();
    for (let i=0, length=mat.length; i<length; i++) {
        ones.set(i, mat[i].reduce((count, val)=>count+val, 0));
    }
    // sort by value (lower is better), then key (smaller is better)
    ones = [...ones.entries()].sort((a, b) => {
        if (a[1] != b[1]) return a[1] - b[1];
        else return a[0] - b[0];
    });
    // get first k elements
    const result = [];
    let count = 0;
    for (let i of ones) {
        if (count++ == k) break;
        result.push(i[0]);
    }
    return result;
};

// Quicker answer - idea is to go throught the 'columns' and if you hit a 0, then add that row to
// the answer. This works as the 1s are always before the 0s.
var kWeakestRows = function(mat, k) {
    const y = mat.length, x = mat[0].length; // row (x) / column (y) lengths
    const ans = [], rowAdded = new Uint8Array(x); // answer, and whether or not the row has already been added (0 or 1)
    for (let j=0; j<y; j++) {
        for (let i=0; i<x; i++) {
            if (!rowAdded[i] && !mat[i][j]) { // row not added already, and we hit a 0
                ans.push(i);
                rowAdded[i] = 1;
                if (ans.length === k) return ans; // if we have enough then return
            }
        }
    }
}

const test = (mat, k) => {
    console.log(kWeakestRows(mat, k));
}

// test([[1,0,0,0],
//       [1,1,1,1],
//       [1,0,0,0],
//       [1,0,0,0]]
// , 2);

test([[1,1,0,0,0],
      [1,1,1,1,0],
      [1,0,0,0,0],
      [1,1,0,0,0],
      [1,1,1,1,1]]
, 3);