function solution(A, B) {
    for(let i=0; i<A.length; i++){
        if(A === B) return i
        else A = A.slice(-1) + A.slice(0, -1)
    }
    return -1
}