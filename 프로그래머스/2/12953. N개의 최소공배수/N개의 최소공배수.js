function solution(arr) {
    return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur))
}

const gcd = (a,b) => a % b ? gcd(b, a % b) : b