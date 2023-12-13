function solution(n) {
    let result = 0n
    for(let i=0; i<=n; i++){
        result += factorial(n-i) / factorial(n-2*i) / factorial(i) 
    }
    
    return n === 1 ? 1 : result % 1234567n
}
    
function factorial(n){
    let num = 1n
    for(let i=2n; i<=BigInt(n); i++) num *= i
    return num <= 0n ? 1 : num 
}