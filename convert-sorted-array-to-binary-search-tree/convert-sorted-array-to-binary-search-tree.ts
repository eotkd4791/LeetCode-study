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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return recur(0, nums.length - 1);
    
    function recur(left: number, right: number) {
        if(left > right) {
            return null;
        }
        
        const mid: number = Math.floor((left + right) / 2);
        const treeNode: TreeNode = new TreeNode(nums[mid]);
        treeNode.left = recur(left, mid - 1);
        treeNode.right = recur(mid + 1, right);
        return treeNode;
    }
}