function solution(numbers) {
    // let answer = 0
    // numbers.forEach((i)=>{
    //     answer += i
    // })
    // return answer/numbers.length;
    
    return numbers.reduce((n,i,ind)=>{return n += i},0)/numbers.length
}