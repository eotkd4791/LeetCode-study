/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    let index = 0;
    return recur(new TreeNode(), inorder);
    
    function recur(node, arr) {        
        if(index >= inorder.length) return;
        
        const mid = arr.findIndex(v => v === preorder[index]);
        index++;
        
        node.val = arr[mid];
        const leftNodes = arr.slice(0, mid);
        const rightNodes = arr.slice(mid + 1);
        
        if(leftNodes.length > 0) {
            node.left = new TreeNode();
            recur(node.left, leftNodes);
        }
        
        if(rightNodes.length > 0) {
            node.right = new TreeNode();
            recur(node.right, rightNodes);
        }
        return node;
    }
};