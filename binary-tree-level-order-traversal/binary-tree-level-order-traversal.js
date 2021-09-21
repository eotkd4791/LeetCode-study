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
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const result = [];
    
    traversal(root, 0);
    
    return result;
    
    function traversal(node, height) {
        if(node === null) {
            return;
        }
        
        height in result
            ? result[height].push(node.val)
            : result[height] = [node.val];
        
        node.left && traversal(node.left, height + 1);
        node.right && traversal(node.right, height + 1);
    }
};