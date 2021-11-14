/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    return recur(root);
    
    function recur(node) {
        if(!node || (node.val === p.val || node.val === q.val)) {
            return node;
        }
        
        const left = recur(node.left);
        const right = recur(node.right);
        
        if(left && right) {
            return node;
        }
        if(left) {
            return left;
        }
        return right;        
    }
};