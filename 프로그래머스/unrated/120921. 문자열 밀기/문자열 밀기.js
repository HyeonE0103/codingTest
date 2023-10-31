function solution(A, B) {
    let result = 0
    const len = A.length
    
    for(let i=0; i<len; i++){
        if(A === B) return result
        else{
            result++
            A = A[len-1] + A.slice(0, len-1)
        }
    }
    return -1
}