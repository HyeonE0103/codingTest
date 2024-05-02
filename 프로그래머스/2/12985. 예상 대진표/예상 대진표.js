function solution(n,a,b){
    let answer = 0
    a -= 1, b -= 1
    
    while(a !== b){
        a = Math.floor(a/2)
        b = Math.floor(b/2)
        
        answer += 1
    }
    
    return answer
}