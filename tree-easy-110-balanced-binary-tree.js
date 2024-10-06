var isBalanced = function(root) {
    if(root === null) return 1
    const maxDepthLeft = isBalanced(root.left)
    const maxDepthRight = isBalanced(root.right)
    if(!maxDepthLeft || !maxDepthRight) return false
    if(Math.abs(maxDepthLeft - maxDepthRight) > 1){
        return false
    }
    return 1 + Math.max(maxDepthRight, maxDepthLeft)
};