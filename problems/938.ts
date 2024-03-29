/* Range Sum of BST

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high]. 


Example 1:
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 

Constraints:
The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.
*/

/**
 * Definition for a binary tree node.
 */
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
	}
}

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
	if (!root) return 0;
	let val = (root.val >= low && root.val <= high) ? root.val : 0;
	if (root.val > low) val += rangeSumBST(root.left, low, high); // BST so left subtree of node contains only nodes with keys lesser than current
	if (root.val < high) val += rangeSumBST(root.right, low, high); // BST so right subtree of node contains only nodes with keys greater than current
	return val;
};