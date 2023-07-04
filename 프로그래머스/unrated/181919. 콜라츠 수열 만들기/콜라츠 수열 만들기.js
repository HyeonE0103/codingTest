function solution(n) {
    let num = [n]
    while(n > 1){
        n = n % 2 === 0 ? n/2 : 3*n+1
        num.push(n)
    }
    return num
}