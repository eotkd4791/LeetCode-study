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
const addTwoNumbers = function(l1, l2) {
    let head = null;
    let cur = null;
    
    recur(l1, l2, 0);  
    return head;
  
    
    function recur(v1, v2, overTen) {
        if(v1 === null && v2 === null) {
            if(overTen) {
                cur.next = new ListNode(1);   
            }
            return;
        }
        
        
        const a = v1 ? v1.val : 0;
        const b = v2 ? v2.val : 0;
        let sum = a + b;
        
        overTen && sum++;
        
        if(head === null) {
            head = new ListNode(sum % 10);
            cur = head;
        } else {
            cur.next = new ListNode(sum % 10);
            cur = cur.next;    
        }
        
        recur(v1 ? v1.next : null, v2 ? v2.next : null, sum >= 10);
    }
};