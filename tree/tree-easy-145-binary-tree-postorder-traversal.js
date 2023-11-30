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
var postorderTraversal = function(root) {
    const target = []
    dfs(root, target)
    console.log(target)
    return target
};

const dfs = (root, target) =>{
    if(root){
        dfs(root.left, target)
        dfs(root.right, target)
        target.push(root.val)
    }
}