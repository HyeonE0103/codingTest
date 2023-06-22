function solution(t, p) {
    let answer = 0
    pl = p.length 
    for(let i=0; i<=t.length - pl; i++){
        if(t.slice(i, i + pl) <= p) answer++
    }
    return answer
}