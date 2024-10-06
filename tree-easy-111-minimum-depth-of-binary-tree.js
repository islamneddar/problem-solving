var minDepth = function(root) {
    if(!root) return 0
    const minDepthLeft = minDepth(root.left)
    const minDepthRight = minDepth(root.right)
    if(minDepthLeft === 0) return 1 + minDepthRight
    if(minDepthRight === 0) return 1 + minDepthLeft
    return 1 + Math.min(minDepthLeft,minDepthRight )
};