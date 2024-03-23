function solution(numbers) {
    const num = [0,1,2,3,4,5,6,7,8,9]
    return 45-numbers.reduce((acc,cur)=>num.includes(cur)?acc+=cur:acc,0)
}