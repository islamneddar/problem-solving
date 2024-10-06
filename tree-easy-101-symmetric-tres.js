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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isSymetricRecursive(root.left, root.right)
};

const isSymetricRecursive = (left, right) => {
    if(left === null && right === null) return true
    if(left === null || right === null) return false
    if(left.val !== right.val) return false
    return isSymetricRecursive(left.right, right.left) && isSymetricRecursive(left.left, right.right)
}