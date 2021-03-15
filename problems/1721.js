/* Swapping Nodes in a Linked List

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]

Example 3:
Input: head = [1], k = 1
Output: [1]

Example 4:
Input: head = [1,2], k = 1
Output: [2,1]

Example 5:
Input: head = [1,2,3], k = 2
Output: [1,2,3]

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // idea: the distance from k to the end is the same as distance from start to (end - k)
    // [k to n] is the same as [0 to (n - k)]
    //
    // so if we start to traverse with a second node starting from k, when the first one hits
    // the end, the second will be (n - k)
    //
    // then we just swap the values
    let nodeA = head, nodeB = null, countA = 0, K;
    while (nodeA !== null) {
        if (nodeB !== null) nodeB = nodeB.next;
        if (++countA == k) nodeB = head, K = nodeA;
        nodeA = nodeA.next;
    }
    let kVal = K.val;
    K.val = nodeB.val;
    nodeB.val = kVal;
    return head;
};