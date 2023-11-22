function solution(k, m, score) {
    const sort = score.sort((a,b) => a-b)
    let result = 0
    for(let i=sort.length-1; i>=0; i-=m){
        if(sort[i- m + 1]) result += sort[i- m + 1] * m
    }
    return result
}