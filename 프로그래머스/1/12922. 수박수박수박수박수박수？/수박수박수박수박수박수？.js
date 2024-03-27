function solution(n) {
    const s = ['수', '박']
    let str = ""
    
    for(let i=0; i<n; i++){
        str += s[i%2]
    }
    return str
}