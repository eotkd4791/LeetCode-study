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
const maxDepth = function(root) {
    const q = [];
    let answer = 0;
    
    loadNodeIfNotNull(root, 1);
    while(q.length > 0) {
        const {node, depth} = q.shift();
        answer = depth;
        loadNodeIfNotNull(node.left, depth + 1);
        loadNodeIfNotNull(node.right, depth + 1);
    }
    
    return answer;
    
    function loadNodeIfNotNull(node, depth) {
        node && q.push({node, depth});
    }
};