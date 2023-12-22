function solution(s) {
    let result = 0
    const mapping = {')':'(', '}':'{', ']':'['}
    
    for(let i=0; i<s.length; i++){
        const stack = []
        let flag = true
        for(let j=0; j<s.length; j++){
            if(s[j] === '(' || s[j] === '{' || s[j] === '[') stack.push(s[j])
            else{
                sp = stack.pop()
                if(sp !== mapping[s[j]]){
                    flag = false
                    break
                }
            }
        }
        if(flag && stack.length === 0) result += 1
        s = s.slice(1) + s[0]
    }
    return result
}