const lengthOfLongestSubstring = function(s) {
    if(s.length === 1){
        return 1
    }
    const stringSplitted = s.split("")
    let longestSubstring = ""
    let maxSubString = 0

    let i = 0
    while(i < stringSplitted.length){
        longestSubstring = stringSplitted[i]
        let j = i+1
        while(j < stringSplitted.length && !longestSubstring.includes(stringSplitted[j])){
            let nextChar = stringSplitted[j]
            longestSubstring = longestSubstring.concat(nextChar)
            j++
        }
        const max = longestSubstring.length
        if(max>maxSubString){
            maxSubString = max
        }
        i++
        console.log(longestSubstring)
    }
    if(longestSubstring.length > maxSubString){
        maxSubString = longestSubstring.length
    }
    return maxSubString
};


// best solution : using sliding window
const lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


console.log(lengthOfLongestSubstring("dvdf"))


