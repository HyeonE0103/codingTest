function solution(n, k) {
    let answer = []
    for(let i = 1*k; i<=n; i+=k){
        answer.push(i)
    }
    return answer
}