function solution(citations) {
    let result = 0
    let arr = []
    citations.sort((a,b) => b-a)
    
    for(let i=0; i<citations.length; i++){
        arr.push(Math.min(citations[i], i+1))
    }
    
    return Math.max(...arr)
}

//H-index란 정확히 무엇인가...?