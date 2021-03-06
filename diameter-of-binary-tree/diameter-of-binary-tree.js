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
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
    let answer = 0;
    recur(root);
    return answer;
    
    function recur(node) {
        if(node === null) {
            return 0;
        }
        const left = recur(node.left);
        const right = recur(node.right);
        
        answer = Math.max(answer, left + right);
        
        return Math.max(left, right) + 1;
    }
};