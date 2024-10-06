// think about the XOR operator
// becuase a ^ a = 0 and a ^ 0 = a
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const sorted = nums.sort()
    const sortedLength = sorted.length

    let p1 = 0
    console.log(sorted)
    while(p1 < sortedLength-1){
        if(sorted[p1] !== sorted[p1+1]){
            return sorted[p1]
        }
        p1=p1+2
    }

    return sorted[sortedLength -1]
};