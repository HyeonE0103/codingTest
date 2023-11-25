function solution(N, stages) {
    let result = []
    for(let i=1; i<=N; i++){
        let people = stages.filter(x => x>=i).length
        let num = stages.filter(x => x===i).length
        result.push([i, num/people])
    }
    result.sort((a, b) => b[1] - a[1])
    return result.map(x => x[0])
}