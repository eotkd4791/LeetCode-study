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