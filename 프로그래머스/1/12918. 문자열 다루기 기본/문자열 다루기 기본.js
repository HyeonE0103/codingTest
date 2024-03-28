function solution(s) {
    const n = s.length
    if(n=== 4 || n === 6){
        for(let i=0; i<n; i++){
            if(isNaN(s[i])) return false
        }
        return true
    }
    return false
}