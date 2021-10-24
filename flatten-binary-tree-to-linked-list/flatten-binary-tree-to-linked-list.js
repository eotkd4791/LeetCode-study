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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {
    if(!root) return root;
    
    let node = root;
    if(root.left) {
        flatten(node.left);
        node = root.left;
        while(node.right) {
            node = node.right;
        }
    }
    flatten(root.right);
    node.right = root.right;
    if(root.left) {
        root.right = root.left;
    }
    root.left = null;
};