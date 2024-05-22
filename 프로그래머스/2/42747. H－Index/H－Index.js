function solution(citations) {
    const hIndex = citations.sort((a,b)=>b-a).map((n,i) => n <= i ? n : i+1)
    
    return Math.max(...hIndex)
}