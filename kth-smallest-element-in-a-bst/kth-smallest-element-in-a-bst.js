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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
    const elements = [];
    inorder(root);
    return elements[k - 1];
    
    function inorder(node) {
        if(node === null) return;
        inorder(node.left);
        elements.push(node.val);
        inorder(node.right);
    }
};