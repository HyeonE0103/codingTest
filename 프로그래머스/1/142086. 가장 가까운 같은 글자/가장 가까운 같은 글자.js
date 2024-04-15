function solution(s) {
    let arr = []
    
    for(let i=0; i<s.length; i++){
        let a = s.slice(0, i).lastIndexOf(s[i])
        a === -1 ? arr.push(-1) : arr.push(i-a)
    }
    
    return arr
}