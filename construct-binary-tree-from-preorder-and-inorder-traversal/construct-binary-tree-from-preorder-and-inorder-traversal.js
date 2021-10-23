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
    let indexOfPreorder = 0;
    return recur(new TreeNode(), inorder);
    
    function recur(node, candidate) {        
        if(indexOfPreorder >= inorder.length) return;
        
        const rootIndex = candidate.findIndex(v => v === preorder[indexOfPreorder]);
        indexOfPreorder++;
        
        node.val = candidate[rootIndex];
        const leftNodes = candidate.slice(0, rootIndex);
        const rightNodes = candidate.slice(rootIndex + 1);
        
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