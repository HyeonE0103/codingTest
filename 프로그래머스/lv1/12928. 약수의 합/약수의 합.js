function solution(n) {
    let an = 0
    for (let i=1; i<=n; i++){
        n % i === 0 ? an += i : an
    }
    return an
}