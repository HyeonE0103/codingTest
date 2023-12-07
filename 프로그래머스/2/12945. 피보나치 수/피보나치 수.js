function solution(n) {
    let arr = [0n, 1n]
    for(let i=2; i<=n; i++){
        arr[i] = BigInt(arr[i - 2]) + BigInt(arr[i - 1])
    }
    return arr[n] % 1234567n
}