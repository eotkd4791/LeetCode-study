/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function(root1: TreeNode, root2: TreeNode): TreeNode | null {
    return !root1 || !root2
        ? root1 ?? root2
        : recur(root1, root2);
    
    function recur(from:TreeNode, to: TreeNode): TreeNode {
        if(!from) {
           return to;
        }
        
        to.val += from.val;
        
        if(from.left) {
            to.left ??= new TreeNode(0);
            recur(from.left, to.left);
        }
        if(from.right) {
            to.right ??= new TreeNode(0);
            recur(from.right, to.right);
        }
        return to;
    }
};