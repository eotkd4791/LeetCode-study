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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    const nodes: TreeNode[] = [];
    recur(root);
    makeList();
    
    function recur(node: TreeNode | null) {
        if(node === null) {
            return;
        }
        nodes.push(node);
        recur(node.left);
        recur(node.right);
    }

    function makeList() {
        if(nodes.length < 2) {
            return;
        }
        let curNode: TreeNode = root;
        nodes.forEach(node => {
            curNode!.left = null;
            curNode!.right = node;
            curNode = curNode!.right;
        });
    }
};