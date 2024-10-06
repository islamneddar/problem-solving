// slding window d
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length){
        return -1
    }
    let firstCurrentIndex = 0
    let currentIndexInNeedle = 0
    while(firstCurrentIndex < haystack.length){
        for(let i = firstCurrentIndex; i < haystack.length; i++){
            if(haystack[i] === needle[currentIndexInNeedle]){
                currentIndexInNeedle+=1
                if(currentIndexInNeedle === needle.length){
                    return firstCurrentIndex
                }
            }else {
                currentIndexInNeedle = 0
                firstCurrentIndex += 1
                break
            }
        }

    }
    return -1
};

console.log(strStr("aaa", "aaaa"))