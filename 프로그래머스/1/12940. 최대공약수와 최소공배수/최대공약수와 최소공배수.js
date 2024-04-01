function solution(n, m) {
    const num = n%m === 0 ? m : gcd(m, n%m)
    return [num, n*m/num]
}
    
function gcd(a, b){
    return (a%b) === 0 ? b : gcd(b, a%b)
}