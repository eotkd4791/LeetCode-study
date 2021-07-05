/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function(root1, root2) {
    if(root1 || root2) {
        const treeNode = new TreeNode();
        merge(root1, treeNode);
        merge(root2, treeNode);
        return treeNode;   
    }
    return null;
    
    function merge(tree, cur) {
        if(tree === null) {
            return;
        }
        cur.val += tree.val;
        
        if(tree.left === null && tree.right === null) {
            return;
        }
        
        if(tree.left) {
            cur.left ??= new TreeNode();
            merge(tree.left, cur.left);
        } 
        
        if(tree.right) {
            cur.right ??= new TreeNode();
            merge(tree.right, cur.right);
        }
        
    }
};