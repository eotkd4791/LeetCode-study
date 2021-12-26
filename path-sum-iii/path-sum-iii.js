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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function(root, targetSum) {
    let answer = 0;
    const arr = [];
    recur(root, targetSum);
    return answer;
    
    function recur(node, targetSum) {
        if(node === null) {
            return;
        }

        arr.push(node.val);
        
        let sum = 0;
        for(let i=arr.length-1; i>=0; i--) {
            sum += arr[i];
            if(sum == targetSum) {
                answer++;
            }
        }
        
        recur(node.left, targetSum);
        recur(node.right, targetSum);
        
        arr.pop();
    }
};