/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    const arr = [];
    for(let i=0; i<lists.length; i++) {
        let cur = lists[i];
        while(cur !== null) {
            arr.push(cur.val);
            cur = cur.next;
        }
    }
    
    arr.sort((a, b) => a - b);
    
    let head = null;
    let cur = null;
    for(let i=0; i<arr.length; i++) {
        if(head === null) {
            head = new ListNode(arr[i]);
            cur = head;
        } else {
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
    }
    return head;
};