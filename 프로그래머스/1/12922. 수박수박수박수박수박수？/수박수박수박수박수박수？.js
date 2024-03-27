function solution(n) {
    const s = '수박'.repeat(Math.floor(n/2))
    return n % 2 === 0 ? s : s + '수'
}