/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const result = []
    recur(root);
    return result;
    
    function recur(node: TreeNode | null): void {
        if(node === null) {
            return;
        }
        
        node.left && recur(node.left);
        result.push(node.val);
        node.right && recur(node.right);
    }
};