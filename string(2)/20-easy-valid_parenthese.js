/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2) return false
    const map = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    }
    const initials = ["{", "[", "("]
    const stack = []
    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        if(initials.includes(char)){
            stack.push(char)
        }else{
            const poped = stack.pop()
            if(char !== map[poped]) return false
        }

    }
    return stack.length === 0
};