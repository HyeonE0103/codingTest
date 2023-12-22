function solution(s) {
    let stack = []
    let result = 0, sp = ''
    for(let i=0; i<s.length; i++){
        for(let j=0; j<s.length; j++){
            if(s[j] === '(' || s[j] === '{' || s[j] === '[') stack.push(s[j])
            else{
                sp = stack.pop()
                if(!((s[j] === ')' && sp === '(') || (s[j] === '}' && sp === '{') || (s[j] === ']' && sp === '['))){
                    stack.push(s[j])
                    break;
                }
            }
        }
        if(stack.length === 0) result += 1
        s = s.slice(1) + s[0]
        stack = []
    }
    return result
}