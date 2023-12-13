function solution(n) {
    //피보나치 수열이 됨
    //n칸의 경우의 수 n-1칸에서 한칸 + n-2칸에서 2칸
    
    let dp = []
    dp[1] = 1n, dp[2] = 2n, dp[3] = 3n, dp[4] = 5n
    
    for(let i=5; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n] % 1234567n
}