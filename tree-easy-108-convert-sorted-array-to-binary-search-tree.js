
 //* Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    let start = 0
    let end = nums.length-1
    let mid = Math.ceil((start + end) / 2)
    return new TreeNode(nums[mid], sortedArrayToBSTR(nums, start, mid - 1), sortedArrayToBSTR(nums, mid + 1, end))
};

 const sortedArrayToBSTR = (nums, start, end) => {
     if(start > end) return null
     let mid = Math.ceil((start + end) / 2)
     return new TreeNode(nums[mid], sortedArrayToBSTR(nums, start, mid - 1), sortedArrayToBSTR(nums, mid+1, end))
 }


sortedArrayToBST([-10,-3,0,5,9])

