function solution(arr) {
    return arr.reduce((acc,cur) => acc*cur/gcd(acc, cur))
}

function gcd(a,b){
    return a % b === 0 ? b : gcd(b, a%b)
}