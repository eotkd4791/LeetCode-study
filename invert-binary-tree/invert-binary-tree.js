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
 * @return {TreeNode}
 */
const invertTree = function(root) {
    recur(root);
    return root;
    
    function recur(tree) {
        if(tree === null) {
            return;
        }
        
        const temp = tree.left;
        tree.left = tree.right;
        tree.right = temp;
        
        recur(tree.left);
        recur(tree.right);
    }
};