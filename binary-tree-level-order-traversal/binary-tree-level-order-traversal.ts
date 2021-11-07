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
function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    
    recur(root, 0);
    return result;
    
    function recur(node: TreeNode | null, height: number) {
        if(node) {
            Array.isArray(result[height]) 
                ? result[height].push(node.val)
                : result[height] = [node.val];
            
            recur(node.left, height + 1);
            recur(node.right, height + 1);
        }
    }
};