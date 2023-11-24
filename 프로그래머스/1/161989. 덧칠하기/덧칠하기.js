function solution(n, m, section) {
    let arr = new Array(n+1).fill(0)
    let i = 1, result = 0
    for(const el of section) arr[el] = 1
    
    while(i<=n){
        if(arr[i] === 1){
            result++
            i += m
        }else i++
    }
    return result
}