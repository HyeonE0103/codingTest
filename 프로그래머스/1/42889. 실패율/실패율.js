function solution(N, stages) {
    let result = []
    let people = stages.length
    for(let i=1; i<=N; i++){
        let num = stages.filter(x => x===i).length
        result.push([i, num/people])
        people -= num
    }
    return result.sort((a, b) => b[1] - a[1]).map(x => x[0])
}