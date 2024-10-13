/**
 * @param {number[]} nums
 * @return {number}
 */
/*
idea :
1. we can use two pointer approach
2. we will iterate over the array
3. we will keep track of the current number
4. if we find a number that is greater than the current number
5. we will put it at the k index
6. k will be incremented by 1
 */
var removeDuplicates = function(nums) {
    let currentNumber = nums[0]
    let k = 1
    for(let i = 1; i < nums.length; i+=1){
        if(nums[i] > currentNumber){
            currentNumber = nums[i]
            nums[k] = nums[i]
            k+=1
        }
    }
    return k
};