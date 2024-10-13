/*
idea :
1. reverse the array
2. reverse the first k elements
3. reverse the rest of the elements
 */

var rotate = function(nums, k) {
    k %= nums.length;

    const reverse = (left, right) => {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    };

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};

/*
idea
    k
[7,6,5,4,3,2,1]
 # # * * * * *
↓
     k
[6,7,1,2,3,4,5]
 # # * * * * *
 */




// mine errored

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k === 0) return nums
    if(k > nums.length) k= k-nums.length
    let diff = 0
    for(let i = 0; i < nums.length - 1; i++){
        const swapIndex = nums.length-k+diff
        console.log(swapIndex)
        const s = nums[swapIndex]
        nums[swapIndex] = nums[i]
        nums[i] = s
        if(swapIndex === nums.length - 1) diff = 0
        else diff += 1
        console.log(nums)
    }
};