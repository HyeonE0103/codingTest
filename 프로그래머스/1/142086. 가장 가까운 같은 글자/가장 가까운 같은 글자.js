function solution(s) {
    let result = [-1]
    for(let i=1; i<s.length; i++){
        for(let j=i-1; j>=0; j--){
            if(s[i] === s[j]){
                result.push(i-j)
                break
            }
        }
        if(result.length <= i)   result.push(-1)
    }
    
    return result
}