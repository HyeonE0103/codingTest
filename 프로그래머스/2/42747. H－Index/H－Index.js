function solution(citations) {
    const hArr = citations.sort((a,b) => b-a).map((n, i) => Math.min(n, i+1))
    
    return Math.max(...hArr)
}