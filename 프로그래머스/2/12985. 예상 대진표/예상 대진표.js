function solution(n,a,b){
    let answer = 0
    while((Math.abs(a-b) !== 1) || (Math.min(a,b) % 2 !== 1)){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer += 1
    }
    return answer+1
}