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
type Node = TreeNode | null;

function invertTree(root: Node): Node {
    invertTree(root);
    return root;
    
    function invertTree(node: Node) {
        if(node === null) {
            return;
        }
        
        invertTree(node.left);
        invertTree(node.right);
        
        const treeNode = node.left;
        node.left = node.right;
        node.right = treeNode;
    }
};