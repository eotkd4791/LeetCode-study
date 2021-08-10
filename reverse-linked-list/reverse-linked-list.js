/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let newHead = null;
    head && recur(head);
    return newHead;
    
    function recur(node) {
        if(node.next === null) {
            newHead = new ListNode(node.val, null);
            return newHead;
        }
        const curNode = recur(node.next);
        curNode.next = new ListNode(node.val, null);
        return curNode.next;
    }
};