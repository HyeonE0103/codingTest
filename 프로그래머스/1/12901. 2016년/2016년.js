function solution(a, b) {
    const date = new Date(2016, a-1, b).toString()
    
    return date.slice(0,3).toUpperCase()
}