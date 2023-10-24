//mine
var isPalindrome = function(x) {
    const numberArray = x.toString().split('')
    const numberArrayLength = numberArray.length

    console.log(numberArray)
    for(let i= 0; i < numberArray.length; i+=1){
        if(numberArray[i] !== numberArray[numberArrayLength-1-i]){
            return false
        }
    }
    return true
};

//best
var isPalindrome = function(x) {
    return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
};