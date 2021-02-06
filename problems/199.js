/* Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let values = [];
    let rowNodePositions = [];

    // Recursively check all nodes in tree to get the rightmost value for each row
    const updateValues = (row, node, pos = '') => {
        // Pass the row (from 0), node, and position - e.g. 112 would be left, left, right

        if (node === null) return; // If node is null then nothing to do

        /* Use current node value if either:
        
            No value for that row yet

            The current position is greater than the position of the node used for this row
            E.g 21 > 11 (use "right left" over "left left")

        If using this node value, then also store the current node position for this row
        for future comparisons
        */
        if (values[row] === undefined || pos > rowNodePositions[row]) {
            values[row] = node.val;
            rowNodePositions[row] = pos;
        }
        
        // Now do this for left/right child nodes
        updateValues(row + 1, node.left, Number(pos+''+'1'))
        updateValues(row + 1, node.right, Number(pos+''+'2'))
    };

    updateValues(0, root);

    return values;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const test = (root) => {
    console.log(root, rightSideView(root));
}

test(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)));