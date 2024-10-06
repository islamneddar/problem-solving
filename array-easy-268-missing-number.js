/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsSorted = nums.sort((a,b)=>a-b)
    if(numsSorted[0] !== 0) return 0
    const numsSortedLength = numsSorted.length
    if(numsSorted[numsSortedLength-1] !== numsSortedLength) return numsSortedLength
    for(let i = 0; i < numsSortedLength-1; i++){
        const currentNumber = numsSorted[i]
        if(numsSorted[i+1] - currentNumber > 1){
            return currentNumber + 1
        }
    }
};