function solution(s){
    let n = 0
    
    for(let i=0; i<s.length; i++){
        n += s[i] === '(' ? 1 : -1
        if(n < 0) return false
    }
    
    return n === 0 ? true : false
}