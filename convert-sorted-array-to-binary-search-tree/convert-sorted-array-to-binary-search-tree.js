/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    return convertBinarySearchTree(0, nums.length - 1);
    
    function convertBinarySearchTree(left, right) {
        if(left > right) {
            return null;
        }
        
        const mid = Math.floor((left + right) / 2);
        const treeNode = new TreeNode(nums[mid]);
        treeNode.left = convertBinarySearchTree(left, mid - 1);
        treeNode.right = convertBinarySearchTree(mid + 1, right);
        return treeNode;
    }
};