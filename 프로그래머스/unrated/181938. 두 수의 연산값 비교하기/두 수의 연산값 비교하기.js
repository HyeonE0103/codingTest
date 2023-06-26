function solution(a, b) {
    const n = (a.toString() + b.toString())
    const n2 = 2 * a * b
    return Math.max(n, n2)
}