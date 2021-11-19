/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const rob = function(root) {
    let prev = 0;
    return recur(root);
    
    function recur(node) {
        if(!node) {
            prev = 0;
            return prev;
        }
        const left = recur(node.left);
        const prevLeft = prev;
        const right = recur(node.right);
        const prevRight = prev;
        
        prev = left + right;
        return Math.max(node.val + prevLeft + prevRight, left + right);
    }
    
};