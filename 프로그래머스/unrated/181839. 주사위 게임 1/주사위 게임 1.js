function solution(a, b) {
    let an = a % 2 !== 0    //a 홀수
    let bn = b % 2 !== 0    //b 홀수
    return an && bn ? a*a + b*b : an || bn ? 2*(a+b) : Math.abs(a-b)
}