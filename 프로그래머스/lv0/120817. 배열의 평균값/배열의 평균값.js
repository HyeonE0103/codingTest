function solution(numbers) {
    let answer = 0
    numbers.forEach((i)=>{
        answer += i
    })
    return answer/numbers.length;
}