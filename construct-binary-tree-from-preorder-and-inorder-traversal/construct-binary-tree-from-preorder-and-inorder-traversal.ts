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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let preorderIndex = 0;
    return recur(new TreeNode(), inorder);
    
    function recur(node: TreeNode | null, nodesCanBeRoot: number[]) {
        
        const rootIndex = nodesCanBeRoot.findIndex(nodeValue => nodeValue === preorder[preorderIndex]);
        node.val = nodesCanBeRoot[rootIndex];
        
        preorderIndex++;
        
        const nodesInLeftSubTree = nodesCanBeRoot.slice(0, rootIndex);
        const nodesInRightSubTree = nodesCanBeRoot.slice(rootIndex + 1);
        
        if(nodesInLeftSubTree.length > 0) {
            node.left = new TreeNode();
            recur(node.left, nodesInLeftSubTree);
        }
        
        if(nodesInRightSubTree.length > 0) {
            node.right = new TreeNode();
            recur(node.right, nodesInRightSubTree);
        }
        return node;
    }
};