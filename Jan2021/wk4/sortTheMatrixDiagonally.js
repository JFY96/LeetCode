/* Sort the Matrix Diagonally

A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

Example 1:

Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

https://assets.leetcode.com/uploads/2020/01/21/1482_example_1_2.png

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
1 <= mat[i][j] <= 100
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    // Store the diagonals, indexed by difference in the row/column (so i,j will be in i-j)
    let diagonals = {};
    for (let i in mat) {
        for (let j in mat[i]) {
            if (diagonals[i-j] === undefined) diagonals[i-j] = []; 
            diagonals[i-j].push(mat[i][j]); // store each value with row number as key
        }
    }

    // sort each diagonal (using built in sort function)
    for (let d in diagonals) diagonals[d].sort((a, b) => a - b);
    
    // create prefilled array matrix
    let newMat = Array(mat.length).fill(null).map(()=>Array(mat[0].length).fill(0));
    // update values from sorted diagonals
    for (let d in diagonals) {
        let new_i = d <= 0 ? 0 : d; // starting row for this diagonal
        for (let value of diagonals[d]) {
            newMat[new_i][Math.abs(d-new_i)] = value; // column is difference between d and i
            new_i++; // increment row
        }
    }

    return newMat;
};

var test = function(mat) {
    console.log(mat, 'and', diagonalSort(mat));
}

// test([[3,3,1,1],[2,2,1,2],[1,1,1,2]]);
test([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]);