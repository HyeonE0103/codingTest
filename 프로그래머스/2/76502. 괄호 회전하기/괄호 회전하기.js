function solution(s) {
    let result = 0
    const double = s + s, len = s.length
    
    if(len % 2 === 1) return 0
    
    for(let i=0; i<len; i+=1){
        result += isCorrect(double.slice(i, len+i))
    }
    
    return result
}
    
function isCorrect(s){
    let stack = []
    const pair = {']' : '[', ')' : '(', '}': '{'}

    for(let i=0; i<s.length; i+=1){
        if(s[i] === '[' || s[i] === '(' || s[i] === '{') stack.push(s[i])
        else{
            const c = stack.pop()
            if(c !== pair[s[i]] || c == null) return 0
        }
    }
    
    return stack.length === 0 ? 1 : 0
}