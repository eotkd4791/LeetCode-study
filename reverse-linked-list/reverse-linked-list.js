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
    let cur = head;
    const vals = [];
    
    while(cur) {
        vals.push(cur.val);
        cur = cur.next;
    }
    
    vals.reverse();
    
    cur = head;
    
    for(let i=0; cur; i++) {
        cur.val = vals[i];
        cur = cur.next;
    }
    
    return head;
};