function solution(answers) {
    const person = [1,2,3,4,5]
    const person2 = [2,1,2,3,2,4,2,5]
    const person3 = [3,3,1,1,2,2,4,4,5,5]
    
    let nums = answers.reduce(([n,n2,n3],cur,i)=>{
        if(person[i%5] === cur) [n++,n2,n3]
        if(person2[i%8] === cur) [n,n2++,n3]
        if(person3[i%10] === cur) [n,n2,n3++]
        return [n,n2,n3]
    },[0,0,0])   
    
    let winner = []
    for(let i=0; i<nums.length; i++){
        if(nums[i] === Math.max(...nums)) winner.push(i+1)
    }
    return winner
}