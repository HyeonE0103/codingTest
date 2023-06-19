function solution(answers) {
    const a = [1,2,3,4,5]
    const b = [2,1,2,3,2,4,2,5]
    const c = [3,3,1,1,2,2,4,4,5,5]
    
    let nums = [0,0,0]
    let answer = []
    
    for(let i=0; i<answers.length; i++){
        if(a[i%5] === answers[i]) nums[0]++
        if(b[i%8] === answers[i]) nums[1]++
        if(c[i%10] === answers[i]) nums[2]++
    }
    
    for(let i = 0; i<3; i++){
        if(nums[i] === Math.max(...nums)) answer.push(i+1)
    }
    
    return answer
}