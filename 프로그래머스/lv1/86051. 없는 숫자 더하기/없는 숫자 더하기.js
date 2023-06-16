function solution(numbers) {
    let num = [1,2,3,4,5,6,7,8,9]
    return num.reduce((acc, cur) => numbers.includes(cur) ? acc: acc+=cur,0)
}