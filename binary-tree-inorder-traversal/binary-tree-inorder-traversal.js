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
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const inorder = [];
    
    const recur = tree => {
        if(tree) {
            tree.left && recur(tree.left);
            tree && inorder.push(tree.val);
            tree.right && recur(tree.right);    
        }    
    };
    
    recur(root);
    
    return inorder;
};