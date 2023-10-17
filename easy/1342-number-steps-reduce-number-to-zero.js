function numberOfSteps(num) {
    if(num === 0) return 0
    let steps = 0
    while(num > 0){
        if(isOdd(num)){
            num = num / 2
        }else {
            num -= 1
        }
        steps+=1
    }
    return steps
};

function isOdd(num ) {
    return num % 2 !== 1
}