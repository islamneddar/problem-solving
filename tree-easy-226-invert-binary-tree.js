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
 * @return {TreeNode}
 */
const invertTree = function (root) {

    function invertTreeRecursive(head) {
        if (head === null) return
        const rightTemp = head.right
        head.right = head.left
        head.left = rightTemp
        invertTreeRecursive(head.left)
        invertTreeRecursive(head.right)
    }

    invertTreeRecursive(root)
    return root
};