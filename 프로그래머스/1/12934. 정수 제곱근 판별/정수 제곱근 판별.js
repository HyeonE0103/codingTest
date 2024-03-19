function solution(n) {
    const num = Math.sqrt(n)
    return num === parseInt(num) ? Math.pow(num+1, 2) : -1
}