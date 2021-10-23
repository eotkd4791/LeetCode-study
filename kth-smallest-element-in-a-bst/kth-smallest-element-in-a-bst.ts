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
type Tree = TreeNode | null;

function kthSmallest(root: Tree, k: number): number {
   const values: number[] = [];
    recur(root);
    return values[k-1];
    
    function recur(tree: Tree) {
        tree.left && recur(tree.left);
        values.push(tree.val);
        tree.right && recur(tree.right);
    }
};