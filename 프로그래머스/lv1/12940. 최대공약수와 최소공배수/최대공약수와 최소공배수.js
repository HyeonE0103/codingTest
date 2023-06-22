function solution(n, m) {   // n < m
    let nums = [0,0]
    for(let i=Math.min(n,m); i<=i; i--){
        if(n%i===0 && m%i===0){
            nums[0] = i
            break;
        }
    }
    nums[1] = (n/nums[0]) * (m/nums[0]) * nums[0]
    return nums
}
