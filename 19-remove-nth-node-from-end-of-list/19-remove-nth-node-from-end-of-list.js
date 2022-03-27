/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    const emptyNode = new ListNode(null);
    let prev = emptyNode;
    let cur = head;
    
    prev.next = head;
    
    while(n--) {
        cur = cur.next;
    }
    
    while(cur) {
        prev = prev.next;
        cur = cur.next;
    }
    
    prev.next = prev.next.next;
    return emptyNode.next;
};