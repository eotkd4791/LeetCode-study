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
 * @return {number[]}
 */
const rightSideView = function(root) {
    const visit = new Array(100).fill(-101);
    recur(root, 0);
    return visit.filter(v => v !== -101);
    
    function recur(node, height) {
        if(node === null) {
            return;
        }
        if(visit[height] === -101) {
            visit[height] = node.val;
        }
        
        node?.right && recur(node.right, height + 1);
        node?.left && recur(node.left, height + 1);
    }
};