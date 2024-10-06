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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null) return
    if(root.left === null && root.right === null) return [`${root.val}`]
    const target = `${root.val}`
    const list = []
    function binaryTreeRec(node, str,listTarget){
        console.log(node)
        if(node === null) return
        if(node.right === null && node.left === null) {
            str += "->"+node.val
            listTarget.push(str)
            return
        }
        str += "->"+node.val
        binaryTreeRec(node.left, str,listTarget)
        binaryTreeRec(node.right, str, listTarget)
    }
    binaryTreeRec(root.left, target, list)
    binaryTreeRec(root.right, target, list)
    console.log(list)
    return list
};