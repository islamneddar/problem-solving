/**
 * @param {string} s
 * @return {boolean}
 */

/*
idea : use stack to keep track of the open brackets
1. create a map of open brackets and close brackets
2. create a stack
3. iterate over the string
4. if the current character is an open bracket, we will push it to the stack
5. if the current character is a close bracket, we will pop the top element from the stack
6. if the popped element is not the corresponding open bracket, we will return false
7. finally, we will return true if the stack is empty
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