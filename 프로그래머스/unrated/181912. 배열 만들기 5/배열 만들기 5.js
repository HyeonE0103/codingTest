function solution(intStrs, k, s, l) {
    let result = []
    for(let i=0; i<intStrs.length; i++){
        if(intStrs[i].slice(s,s+l)>k) result.push(Number(intStrs[i].slice(s,s+l)))
    }
    return result
}