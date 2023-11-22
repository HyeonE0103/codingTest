function solution(k, m, score) {
    const sort = score.sort((a,b) => b-a)
    let result = 0
    for(let i=m-1; i<sort.length; i+=m)
        result += sort[i] * m
    return result
}