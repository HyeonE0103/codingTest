function solution(nums) {
    let l = nums.length
    let num = 0
    let bool = true
    for(let i=0; i<l-2; i++){
        for(let j=i+1; j<l-1; j++){
            for (let k=j+1; k<l; k++){
                let sum = nums[i]+nums[j]+nums[k]
                for (let m=2; m<=Math.floor(Math.sqrt(sum));m++)                 { if(sum%m===0) bool = false
                }
                if(bool)    num++
                bool = true
            }
        }
    }
    return num
}