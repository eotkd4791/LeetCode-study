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
const mergeTwoLists = function(l1, l2) {
    const arr = assembleVals(l1).concat(assembleVals(l2));
    let result = null;
    let cur = null;
    
    if(arr.length > 0) {
        const res = arr.sort((a,b) => a - b).map(v => new ListNode(v));
        res.reduce((acc, cur) => acc.next = cur);
        result = res[0];
    }
    return result;

    function assembleVals(list) {
        const arr = [];
        while(list) {
            arr.push(list.val);
            list = list.next;
        }
        return arr;
    }
};