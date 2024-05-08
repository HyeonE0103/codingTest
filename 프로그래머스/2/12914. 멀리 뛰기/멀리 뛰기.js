function solution(n) {
    let d = [0,1,2,3]
    
    for(let i=4; i<=n; i+=1){
        d[i] = (d[i-1] + d[i-2]) % 1234567
    }
    
    return d[n]
}