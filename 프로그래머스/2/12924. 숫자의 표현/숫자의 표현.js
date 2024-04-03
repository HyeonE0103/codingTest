function solution(n) {
    let result = 0
    
    for(let i=1; i<=n/2; i+=1){
        let num = 0
        for(let j=i; j<n; j+=1){
            num += j
            if(n <= num){
                if(n === num) result += 1
                break;
            }
        }
    }
    return result+=1
}