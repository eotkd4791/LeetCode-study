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
const swapPairs = function(head) {
    if(head === null) {
        return null;
    }
    
    let prev = head;
    let cur = prev.next;
    let prevIndex = 0;
    let curIndex = 1;
    const swapped = Array(101).fill(false);
    
    while(prev && cur) {
        if(!swapped[prevIndex] && !swapped[curIndex]) {
            const temp = prev.val;
            prev.val = cur.val;
            cur.val = temp;
            
            swapped[prevIndex] = true;
            swapped[curIndex] = true;
        }
        prevIndex++;
        curIndex++;
        prev = cur;
        cur = cur.next;
    }
    return head;
};