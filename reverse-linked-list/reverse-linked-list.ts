/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let ptr: ListNode | null = null;
    
    while(head !== null) {
        const next: ListNode | null = head.next;
        head.next = ptr;
        ptr = head;
        head = next;
    }
    return ptr;
};