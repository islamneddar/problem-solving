/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/*
idea :
- we will use two pointer technique
- we will iterate over the array
- if we find a number that is not equal to val, we will put it at the k index
- k will be incremented by 1
- finally we will return k
 */
var removeElement = function(nums, val) {
    let k = 0
    for(let i = 0; i< nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k+=1
        }
    }
    return k
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 0 1 2 2 3 0 4 2 *** [2, 3]
    // 0 1 3 2 2 0 4 2 *** [3, 4]
    // 0 1 3 0 2 2 4 2 *** [4, 5]



    const stackOcc = []
    let i = 0
    let count = 0
    while(i < nums.length){
        const num = nums[i]
        if(num === val){
            stackOcc.push(i)
            count += 1
        }else{
            if(stackOcc.length > 0){
                const indexVal = stackOcc.shift()
                nums[indexVal] = num
                nums[i] = val
                stackOcc.push(i)
            }
        }
        i++
    }
    return nums.length - count
};