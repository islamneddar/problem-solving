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
var inorderTraversal = function(root) {
    const listInorderTrav = []
    inorderTraversalRecursive(root, listInorderTrav)
    return listInorderTrav
};

const inorderTraversalRecursive = (root, listInorderTrav) => {
    if(root !== null){
        inorderTraversalRecursive(root.left, listInorderTrav)
        listInorderTrav.push(root.val)
        inorderTraversalRecursive(root.right, listInorderTrav)
    }
}