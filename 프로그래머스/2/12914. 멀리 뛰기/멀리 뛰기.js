function solution(n) {
    //피보나치 수열이 됨
    //n칸의 경우의 수 n-1칸에서 한칸 + n-2칸에서 2칸
    
    let dp = []
    dp[1] = 1, dp[2] = 2, dp[3] = 3, dp[4] = 5
    
    for(let i=5; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }
    return dp[n]
}