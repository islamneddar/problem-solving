var summaryRanges = function(nums) {
    if(nums.length === 0) return []
    if(nums.length === 1) return [`${nums[0]}`]
    let previousNumber = nums[0]
    let a = previousNumber
    let target = []
    let currentNumber = 0
    for(let i = 1; i < nums.length; i++){
        currentNumber = nums[i] // 0
        if(currentNumber !== previousNumber + 1){
            if(previousNumber === a){
                target.push(`${a}`)
            }else target.push(""+ a + "->"+previousNumber)
            a = currentNumber
        }
        previousNumber = currentNumber
    }
    if(a === currentNumber) target.push(`${a}`)
    else target.push(""+ a + "->"+currentNumber)
    return target
};