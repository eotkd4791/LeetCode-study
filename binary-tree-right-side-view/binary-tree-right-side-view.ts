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

function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];
    recur(root, 0);
    return result;
    
    function recur(node: TreeNode, level: number) {
        if(node === null) {
            return;
        }
        
        result[level] = node.val;
        recur(node.left, level + 1);
        recur(node.right, level + 1);
    }
};