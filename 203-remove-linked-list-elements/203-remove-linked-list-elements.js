/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    const start = new ListNode(0, head);
    let prev = start;
    let cur = head;
    
    while(cur !== null) {
        if(cur.val === val) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }
        cur = cur.next;
    }
    return start.next;
};