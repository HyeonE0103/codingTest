function solution(l, r) {
    let nums = []
    for (let i=l; i<=r; i++){
        if(i.toString().split("").every(x=>x==="5"||x==="0"))
            nums.push(i)
    }
    return nums.length === 0 ? [-1] : nums
}