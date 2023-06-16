function solution(a, b) {
    let answer = 0
    max = Math.max(a,b)
    min = Math.min(a,b)
    
    for (let i = min; i<=max; i++){
        answer += i
    }
    return answer
}