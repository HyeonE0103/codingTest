function solution(n) {
    let result = 1
    for(let i=1; i<=n/2; i++){
        let num = 0
        for(let j=i; j<=n; j++){
            num += j
            if(num >= n){
                if(num === n) result+=1
                break
            }
        }
    }
    return result
}