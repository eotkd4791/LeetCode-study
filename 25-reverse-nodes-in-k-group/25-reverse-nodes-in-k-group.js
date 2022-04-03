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
const reverseKGroup = function(head, k) {
    let newHead = null; 
    let tail = null;
    let temp = [];

    
    while (head) {
        temp.push(head);
        head = head.next;
        
        if (temp.length === k) {
            let tempHead = temp[k - 1];
            let tempTail = null;
            for (let i = k - 2; i >= 0; i--) {
                if (tempTail) {
                    tempTail.next = temp[i];
                    tempTail = tempTail.next;
                } else {
                    tempHead.next = temp[i];
                    tempTail = tempHead.next;
                }
            }
            
            if (newHead) {
                if (tail) tail.next = tempHead;
                tail = tempTail;
            } else {
                newHead = tempHead;
                tail = tempTail;
            }
            temp = [];
        }
    }
    
    if (temp.length > 0) {
        for (let node of temp) {
            if (newHead) {
                if (tail) tail.next = node;
                tail = node;
            } else {
                newHead = node;
            }
        }
    }
    
    if (tail) tail.next = null;
    return newHead;
};