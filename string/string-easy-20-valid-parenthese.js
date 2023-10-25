/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s[0] === "]" || s[0] === "}" || s[0] === ")") return false
    if(s.length < 2) return false

    const map ={
        "}" : "{",
        ']' : '[',
        ')' : '('
    }


    const stack = []

    for(let i = 0; i < s.length; i+=1){
        const char = s[i]
        if(map[char]){
            if(map[char] === stack[stack.length-1] && stack.length > 0){
                stack.pop()
            }else{
                return false
            }
        }else{
            stack.push(char)
        }
    }

    return stack.length === 0
};