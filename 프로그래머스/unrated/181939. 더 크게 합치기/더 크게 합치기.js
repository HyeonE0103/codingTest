function solution(a, b) {
    a = String(a)
    b = String(b)
    return Number(a+b) > Number(b+a) ? Number(a+b) : Number(b+a)
}