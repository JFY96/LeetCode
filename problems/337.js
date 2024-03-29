/* House Robber III

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

Example 1:
Input: root = [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

Example 2:
Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.


Constraints:
The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 104
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
 * @return {number}
*/
const rob = (root) => {
	const robWithAndWithoutThisNode = (node) => {
		if (!node) return [0, 0];

		const left = robWithAndWithoutThisNode(node.left);
		const right = robWithAndWithoutThisNode(node.right);

		const robWithThisNode = node.val + left[1] + right[1];
		const robWithoutThisNode = Math.max(...left) + Math.max(...right);

		return [robWithThisNode, robWithoutThisNode];
	};

	const answers = robWithAndWithoutThisNode(root);
	return Math.max(answers[0], answers[1]);
};

// First Attempt (No Optimization)
// const rob = (node, skipNode = false) => {
// 	if (!node) return 0;
// 	const amountWithoutThisNode = rob(node.left) + rob(node.right);
// 	if (skipNode) return amountWithoutThisNode;
// 	const amountWithThisNode = node.val + rob(node.left, true) + rob(node.right, true);
// 	return Math.max(amountWithoutThisNode, amountWithThisNode);
// };