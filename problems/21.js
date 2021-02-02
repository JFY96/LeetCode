/* Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.

 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let tempNode = new ListNode();
    let returnNode = tempNode;
    while (l1 !== null || l2 !== null) {
        let value = 0;
        if (l1 === null || (l2 !== null && l2.val < l1.val)) {
            value = l2.val;
            l2 = l2.next;
        } else {
            value = l1.val;
            l1 = l1.next;
        }
        tempNode.next = new ListNode(value, null);
        tempNode = tempNode.next;
    }
    return returnNode.next;
};


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// pretty print in array form for testing
function prettyPrintListNode(l) {
    let a = new Array();
    while (l !== null) {
        a.push(l.val);
        l = l.next;
    }
    console.log(a);
}

// Testing
test = (l1, l2) => {
    prettyPrintListNode(l1); 
    prettyPrintListNode(l2);
    prettyPrintListNode(mergeTwoLists(l1, l2));
}

test(new ListNode(1, new ListNode(2, new ListNode(4, null))), new ListNode(1, new ListNode(3, new ListNode(4, null))));
