function solution(n) {
    let answer = []
    for(let i=0; i<n; i++){
        answer[i] = []
        for(let j=0; j<n; j++){
            if(j === i) answer[i].push(1)
            else answer[i].push(0)
        }
    }
    return answer
}