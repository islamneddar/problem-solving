// think to sort the strings than check the first and last

var longestCommonPrefix = function (strs) {
    let output = "";
    for (let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i])) output += strs[0][i];
        else break;
    }
    return output;
};
