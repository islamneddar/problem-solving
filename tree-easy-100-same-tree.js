/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const stackP = [p]
    const stackQ = [q]
    return isSameTreeRecursive(stackP, stackQ)
};

const isSameTreeRecursive = (stackP, stackQ) => {
    while(stackP.length > 0 && stackQ.length >0){
        console.log("stackP => ",stackP)
        console.log("stackQ => ",stackQ)
        const p = stackP.shift()
        const q = stackQ.shift()

        if(p===null && q!==null) return false
        if(q===null && p!==null) return false
        if(p !== null && q!==null && p.val !== q.val) return false

        if(p !== null ) {
            stackP.unshift(p.left)
            stackP.unshift(p.right)
        }
        if(q !== null ){
            stackQ.unshift(q.left)
            stackQ.unshift(q.right)
        }
    }
    return true
}



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    console.log("p => ", p)
    console.log("q => ", q)
    if(p===null && q===null) return true
    if(p === null || q === null) return false
    if(p.val !== q.val) return false
    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right)
};
